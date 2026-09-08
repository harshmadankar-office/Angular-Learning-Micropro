import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RXJS } from './rxjs';

describe('RXJS', () => {
  let component: RXJS;
  let fixture: ComponentFixture<RXJS>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RXJS]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RXJS);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
