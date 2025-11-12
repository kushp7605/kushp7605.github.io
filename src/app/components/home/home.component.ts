import { Component } from '@angular/core';
import {HeaderComponent} from '../header/header.component';
import {FooterComponent} from '../footer/footer.component';
import { RouterOutlet} from '@angular/router';
import {AboutSectionHomeComponent} from '../about-section-home/about-section-home.component';

@Component({
  selector: 'app-home',
  imports: [
    HeaderComponent,
    FooterComponent,
    RouterOutlet,
    AboutSectionHomeComponent,
  ],
  templateUrl: './home.component.html',
  standalone: true,
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
