import { Component } from '@angular/core';
import {RouterOutlet, RouterLink, RouterLinkActive, Router, NavigationStart, NavigationEnd} from '@angular/router';
import { NgIf } from '@angular/common';
import { LoaderComponent } from './components/loader/loader.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    LoaderComponent,
    NgIf,
  ],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = "KaroriEnergyTechnology";
  isLoading = false;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.isLoading = true; // Show loader
      } else if (event instanceof NavigationEnd) {
        setTimeout(() => this.isLoading = false, 3000); // Hide loader smoothly
      }
    });
  }
}
