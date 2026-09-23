import { Component, inject, Input, OnChanges, SimpleChanges } from '@angular/core';
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
export class CommonClinicDesk implements OnChanges {
  private modalService = inject(ModalService);
  @Input() activeTab: string = '';
  storeData: any[] = [];

  ngOnInit() {
    this.getDetails();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['activeTab']) {
      this.getDetails();
    }
  }

  addDetails() {
    const title = this.activeTab;
    const data = this.activeTab;
    this.modalService.useModal(HospitalClinicDeskForm, title, data);
  }

  getDetails() {
    // this.storeData = this.modalService.getData();
    // localStorage.getItem(this.storeData);
    // console.log(localStorage.getItem(this.storeData));
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

  refresh(){
    this.getDetails();
  }
}
