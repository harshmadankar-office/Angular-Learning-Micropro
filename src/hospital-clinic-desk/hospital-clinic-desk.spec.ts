import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalClinicDesk } from './hospital-clinic-desk';

describe('HospitalClinicDesk', () => {
  let component: HospitalClinicDesk;
  let fixture: ComponentFixture<HospitalClinicDesk>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HospitalClinicDesk]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HospitalClinicDesk);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
