import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentProjectionCard } from './content-projection-card';

describe('ContentProjectionCard', () => {
  let component: ContentProjectionCard;
  let fixture: ComponentFixture<ContentProjectionCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentProjectionCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentProjectionCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
