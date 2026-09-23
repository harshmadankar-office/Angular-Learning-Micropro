import { Component, Input } from '@angular/core';
import { HmCard } from '../../shared/components/hm-card/hm-card';
import { HmButton } from '../../shared/components/hm-button/hm-button';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-common-clinic-desk',
  imports: [HmCard, HmButton,TitleCasePipe],
  templateUrl: './common-clinic-desk.html',
  styleUrl: './common-clinic-desk.scss',
})
export class CommonClinicDesk {

  @Input() activeTab : string ='';

  ngOnInit(){
    console.log(this.activeTab);
  }
}
