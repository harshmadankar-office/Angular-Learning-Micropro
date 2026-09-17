import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HmCard } from './hm-card';

describe('HmCard', () => {
  let component: HmCard;
  let fixture: ComponentFixture<HmCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HmCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HmCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
