import { ApplicationRef, ComponentRef, createComponent, EnvironmentInjector, inject, Injectable, Type } from '@angular/core';
import { UseModal } from '../shared/modal/use-modal/use-modal';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private modalRef?: ComponentRef<UseModal>;
  private appRef = inject(ApplicationRef);
  private environmentInjector = inject(EnvironmentInjector);
  title !: string;
  // constructor(
  //   private appRef!: ApplicationRef,
  //   private environmentInjector: EnvironmentInjector
  // ) { }

  useModal(component: Type<unknown>, modalTitle: string) {

    this.title = modalTitle;

    // Create Modal Component
    this.modalRef = createComponent(UseModal, { environmentInjector: this.environmentInjector });

    // Attach modal to Angular application
    this.appRef.attachView(this.modalRef.hostView);

    // Add modal to the page
    document.body.appendChild(this.modalRef.location.nativeElement);

    // Get modal component instance
    const modalInstance = this.modalRef.instance;

    // Insert selected component inside modal
    modalInstance.modalContent.createComponent(component);
  }

  close() {
    if (!this.modalRef) return;

    // Remove modal from Angular application
    this.appRef.detachView(this.modalRef.hostView);
    this.modalRef.destroy();
    this.modalRef = undefined;

  }
}
