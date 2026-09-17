import { Component } from '@angular/core';
import { ContentProjectionCard } from '../../shared/components/content-projection-card/content-projection-card';

@Component({
  selector: 'app-show-content-card',
  standalone: true,
  imports: [ContentProjectionCard],
  templateUrl: './show-content-card.html',
  styleUrl: './show-content-card.scss',
})
export class ShowContentCard {

}
