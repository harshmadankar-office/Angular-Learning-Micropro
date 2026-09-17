import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseModal } from './use-modal';

describe('UseModal', () => {
  let component: UseModal;
  let fixture: ComponentFixture<UseModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UseModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UseModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
