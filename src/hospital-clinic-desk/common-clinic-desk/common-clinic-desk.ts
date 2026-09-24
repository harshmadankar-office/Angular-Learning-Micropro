import { ChangeDetectorRef, Component, inject, Input, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { HmCard } from '../../shared/components/hm-card/hm-card';
import { HmButton } from '../../shared/components/hm-button/hm-button';
import { TitleCasePipe } from '@angular/common';
import { ContentProjectionCard } from '../../shared/components/content-projection-card/content-projection-card';
import { ModalService } from '../../services/modal-service';
import { DataRefreshService } from '../../services/data-refresh-service';
import { HospitalClinicDeskForm } from '../hospital-clinic-desk-form/hospital-clinic-desk-form';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-common-clinic-desk',
  imports: [HmCard, HmButton, TitleCasePipe, ContentProjectionCard],
  templateUrl: './common-clinic-desk.html',
  styleUrl: './common-clinic-desk.scss',
})
export class CommonClinicDesk implements OnChanges, OnDestroy {
  private modalService = inject(ModalService);
  private cdr = inject(ChangeDetectorRef);
  private dataRefreshService = inject(DataRefreshService);
  private refreshSub?: Subscription;
  @Input() activeTab: string = '';
  storeData: any[] = [];
  title : string = '';

  ngOnInit() {
    this.getDetails();

    this.refreshSub = this.dataRefreshService.refresh$.subscribe(() => {
      if (this.activeTab) {
        this.getDetails();
        this.cdr.markForCheck();
        this.cdr.detectChanges();
      }
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['activeTab']) {
      this.getDetails();
      this.cdr.markForCheck();
    }
  }

  private getStorageName(): string {
    return this.activeTab?.trim() || '';
  }

  private getStoredItems(): any[] {
    const storageName = this.getStorageName();
    if (!storageName) return [];

    try {
      const savedData = JSON.parse(localStorage.getItem(storageName) ?? '[]');
      return Array.isArray(savedData) ? savedData : [];
    } catch {
      return [];
    }
  }

  private saveStoredItems(items: any[]) {
    const storageName = this.getStorageName();
    if (!storageName) return;
    localStorage.setItem(storageName, JSON.stringify(items));
    this.dataRefreshService.triggerRefresh();
  }

  addDetails() {
    this.title = this.activeTab;
    const data = {
      storageName: this.getStorageName(),
      mode: 'create',
      itemId: null,
    };
    this.modalService.useModal(HospitalClinicDeskForm, this.title, data);
  }

  getDetails() {
    this.storeData = this.getStoredItems();
  }

  editDetails(id: number) {
    const item = this.getStoredItems().find((record) => Number(record.id) === Number(id));
    if (!item) return;

    this.title = this.activeTab;
    this.modalService.useModal(HospitalClinicDeskForm, this.title, {
      storageName: this.getStorageName(),
      mode: 'edit',
      itemId: Number(id),
      item,
    });
  }

  deleteDetails(id: number) {
    const items = this.getStoredItems().filter((record) => Number(record.id) !== Number(id));
    this.saveStoredItems(items);
    this.storeData = items;
  }

  refresh() {
    this.getDetails();
  }

  ngOnDestroy() {
    this.refreshSub?.unsubscribe();
  }
}
