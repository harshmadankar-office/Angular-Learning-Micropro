import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-hospital-clinic-desk',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './hospital-clinic-desk.html',
  styleUrl: './hospital-clinic-desk.scss',
})
export class HospitalClinicDesk {
  private route = inject(ActivatedRoute);
  activeTab: string = '';

  ngOnInit() {
    this.route.children[0].children[0].paramMap.subscribe(params => {
      this.activeTab = params.get('tab') ?? '';
      console.log(this.activeTab);
    });
  }
}