import { Component, inject, ViewChild, ViewContainerRef } from '@angular/core';
import { ModalService } from '../../../services/modal-service';

@Component({
  selector: 'app-use-modal',
  imports: [],
  templateUrl: './use-modal.html',
  styleUrl: './use-modal.scss',
})
export class UseModal {
  @ViewChild('modalContent', { read: ViewContainerRef, static: true }) modalContent!: ViewContainerRef;
  private modalService = inject(ModalService);
  title: string = '';

  ngOnInit() {
    this.title = this.modalService.title;
  }

  closeModal() {
    this.modalService.close();
  }
}
