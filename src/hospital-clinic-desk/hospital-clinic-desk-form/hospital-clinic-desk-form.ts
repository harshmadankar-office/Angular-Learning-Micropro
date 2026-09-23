import { Component, inject, ViewChildren } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { HmButton } from '../../shared/components/hm-button/hm-button';
import { ModalService } from '../../services/modal-service';
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
  isEditMode: boolean = false;
  localId !: string;

  deskForm = this.fb.group({
    id: [{ value: 1, disabled: true }],
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    age: [null as number | null, [Validators.required, Validators.maxLength(2)]],
  });

  ngOnInit() {
    this.localId = this.modalService.getData();
    this.generateNextId();
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

  // saveDetails() {
  //   let formData = this.deskForm.getRawValue();
  //   if (this.deskForm.invalid) {
  //     alert("Invalid Form");
  //     this.deskForm.markAllAsTouched();
  //     return
  //   }
  //   console.log(formData);
  //   if (this.localId == 'patient') {
  //     localStorage.setItem
  //   }
  //   console.log("Save Details");
  // }

  saveDetails(): void {
    if (this.deskForm.invalid) {
      this.deskForm.markAllAsTouched();
      return;
    }
    const formData = this.deskForm.getRawValue();
    const data = JSON.parse(localStorage.getItem(this.localId) || '[]');
    data.push(formData);
    localStorage.setItem(this.localId, JSON.stringify(data));
    this.deskForm.reset();
    this.generateNextId();
  }

}
