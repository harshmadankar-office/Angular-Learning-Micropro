import { Component, inject, ViewChild, ViewContainerRef } from '@angular/core';
import { ModalService } from '../../../services/modal-service';

@Component({
  selector: 'app-use-modal',
  imports: [],
  templateUrl: './use-modal.html',
  styleUrl: './use-modal.scss',
})
export class UseModal {
  private modalService = inject(ModalService);

  @ViewChild('modalContent', { read: ViewContainerRef, static: true }) modalContent!: ViewContainerRef;

  closeModal() {
    this.modalService.close();
  }
}
