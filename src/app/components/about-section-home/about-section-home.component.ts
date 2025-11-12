import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-about-section-home',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './about-section-home.component.html',
  standalone: true,
  styleUrls: ['./about-section-home.component.css']
})
export class AboutSectionHomeComponent {

}
