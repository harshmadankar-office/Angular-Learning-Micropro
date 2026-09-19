import { Component, inject } from '@angular/core';
import { ModalService } from '../../services/modal-service';
import { StudentForm } from '../students/student-form/student-form';

@Component({
  selector: 'app-try-modal',
  imports: [],
  templateUrl: './try-modal.html',
  styleUrl: './try-modal.scss',
})
export class TryModal {
  private modalService = inject(ModalService);

  openModal() {
    // const title = 'Student Form';
    this.modalService.useModal(StudentForm,'Student Form');
    console.log("Open Modal");
  }
}
