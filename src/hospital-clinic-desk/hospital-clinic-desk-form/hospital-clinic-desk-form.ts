import { Component, inject, ViewChildren } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { HmButton } from '../../shared/components/hm-button/hm-button';
import { ModalService } from '../../services/modal-service';
import { DataRefreshService } from '../../services/data-refresh-service';
import { CommonClinicDesk } from '../common-clinic-desk/common-clinic-desk';

@Component({
  selector: 'app-hospital-clinic-desk-form',
  imports: [ReactiveFormsModule, HmButton],
  templateUrl: './hospital-clinic-desk-form.html',
  styleUrl: './hospital-clinic-desk-form.scss',
})
export class HospitalClinicDeskForm {

  private fb = inject(FormBuilder);
  private modalService = inject(ModalService);
  private dataRefreshService = inject(DataRefreshService);
  isEditMode: boolean = false;
  localId !: string;
  editId: number | null = null;

  deskForm = this.fb.group({
    id: [{ value: 1, disabled: true }],
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    age: [null as number | null, [Validators.required, Validators.maxLength(2)]],
  });

  ngOnInit() {
    const formData = this.modalService.getData();
    if (formData && typeof formData === 'object') {
      this.localId = formData.storageName ?? '';
      this.isEditMode = formData.mode === 'edit';
      this.editId = formData.itemId ?? null;

      if (this.isEditMode) {
        const existingItem = formData.item;
        if (existingItem) {
          this.deskForm.patchValue({
            id: existingItem.id,
            name: existingItem.name,
            email: existingItem.email,
            age: existingItem.age,
          });
        }
      }
    } else {
      this.localId = String(formData ?? '');
    }

    if (!this.isEditMode) {
      this.generateNextId();
    }
  }

  generateNextId(): void {
    const savedData = localStorage.getItem(this.localId);
    if (!savedData) {
      this.deskForm.controls.id.setValue(1);
      return;
    }
    const data = JSON.parse(savedData);
    if (!Array.isArray(data) || data.length === 0) {
      this.deskForm.controls.id.setValue(1);
      return;
    }
    const maxId = Math.max(...data.map((item: any) => Number(item.id)));
    this.deskForm.controls.id.setValue(maxId + 1);
  }

  saveDetails(): void {
    if (this.deskForm.invalid) {
      this.deskForm.markAllAsTouched();
      return;
    }

    const formData = this.deskForm.getRawValue();
    const allData = JSON.parse(localStorage.getItem(this.localId) || '[]');

    if (this.isEditMode && this.editId !== null) {
      const index = allData.findIndex((item: any) => Number(item.id) === Number(this.editId));
      if (index >= 0) {
        allData[index] = {
          ...allData[index],
          ...formData,
          id: Number(this.editId),
        };
      }
    } else {
      const nextId = allData.length ? Math.max(...allData.map((item: any) => Number(item.id || 0))) + 1 : 1;
      allData.push({ ...formData, id: nextId, });
    }

    localStorage.setItem(this.localId, JSON.stringify(allData));
    this.dataRefreshService.triggerRefresh();
    this.modalService.close();
    this.deskForm.reset();
  }

}
