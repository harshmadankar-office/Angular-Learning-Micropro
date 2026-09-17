import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HmButton } from './hm-button';

describe('HmButton', () => {
  let component: HmButton;
  let fixture: ComponentFixture<HmButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HmButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HmButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
