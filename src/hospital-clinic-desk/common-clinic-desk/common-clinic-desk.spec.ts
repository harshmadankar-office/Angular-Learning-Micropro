import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonClinicDesk } from './common-clinic-desk';

describe('CommonClinicDesk', () => {
  let component: CommonClinicDesk;
  let fixture: ComponentFixture<CommonClinicDesk>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonClinicDesk]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommonClinicDesk);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
