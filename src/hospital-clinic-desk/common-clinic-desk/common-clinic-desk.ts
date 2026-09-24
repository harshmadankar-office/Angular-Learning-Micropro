import { ChangeDetectorRef, Component, inject, Input, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { HmCard } from '../../shared/components/hm-card/hm-card';
import { HmButton } from '../../shared/components/hm-button/hm-button';
import { TitleCasePipe } from '@angular/common';
import { ContentProjectionCard } from '../../shared/components/content-projection-card/content-projection-card';
import { ModalService } from '../../services/modal-service';
import { HospitalClinicDeskForm } from '../hospital-clinic-desk-form/hospital-clinic-desk-form';

@Component({
  selector: 'app-common-clinic-desk',
  imports: [HmCard, HmButton, TitleCasePipe, ContentProjectionCard],
  templateUrl: './common-clinic-desk.html',
  styleUrl: './common-clinic-desk.scss',
})
export class CommonClinicDesk implements OnChanges, OnDestroy {
  private modalService = inject(ModalService);
  private cdr = inject(ChangeDetectorRef);
  @Input() activeTab: string = '';
  storeData: any[] = [];

  ngOnInit() {
    this.getDetails();
    window.addEventListener('localStorageChange', this.onStorageChange);
  }

  private onStorageChange = (e: Event) => {
    const key = (e as CustomEvent).detail;
    if (key === this.activeTab) {
      this.getDetails();
      this.cdr.markForCheck();
      this.cdr.detectChanges();
    }
  };

  ngOnChanges(changes: SimpleChanges) {
    if (changes['activeTab']) {
      this.getDetails();
      this.cdr.markForCheck();
    }
  }

  addDetails() {
    const title = this.activeTab;
    const data = this.activeTab;
    this.modalService.useModal(HospitalClinicDeskForm, title, data);
  }

  getDetails() {
    if (!this.activeTab) {
      this.storeData = [];
      return;
    }
    try {
      const savedData = JSON.parse(localStorage.getItem(this.activeTab) ?? '[]');
      this.storeData = Array.isArray(savedData) ? savedData : [];
    } catch {
      this.storeData = [];
    }
  }

  refresh() {
    this.getDetails();
  }

  ngOnDestroy() {
    window.removeEventListener('localStorageChange', this.onStorageChange);
  }
}
