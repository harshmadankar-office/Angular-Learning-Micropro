import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalClinicDeskForm } from './hospital-clinic-desk-form';

describe('HospitalClinicDeskForm', () => {
  let component: HospitalClinicDeskForm;
  let fixture: ComponentFixture<HospitalClinicDeskForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HospitalClinicDeskForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HospitalClinicDeskForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
