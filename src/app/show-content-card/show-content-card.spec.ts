import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowContentCard } from './show-content-card';

describe('ShowContentCard', () => {
  let component: ShowContentCard;
  let fixture: ComponentFixture<ShowContentCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowContentCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowContentCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
