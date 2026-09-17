import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TryModal } from './try-modal';

describe('TryModal', () => {
  let component: TryModal;
  let fixture: ComponentFixture<TryModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TryModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TryModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
