import { CommonModule } from '@angular/common';
import {Component} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink,
    RouterLinkActive,
    CommonModule
  ],
  templateUrl: './header.component.html',
  standalone: true,
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  isMenuOpen = false;

  isDarkMode = false;

  // constructor() {
  //   const savedTheme = localStorage.getItem('theme');
  //   if (savedTheme === 'dark') {
  //     this.isDarkMode = true;
  //     document.body.classList.add('dark-mode');
  //   }
  // }

  constructor() {
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme === 'dark') {
    this.isDarkMode = true;
    document.body.classList.add('dark-mode');
  } else {
    this.isDarkMode = false;
    document.body.classList.add('light-mode');
  }
}

  
  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    
    if (this.isDarkMode) {
      document.body.classList.remove('light-mode');
      document.body.classList.add('dark-mode');
      // document.body.classList.remove('light-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      document.body.classList.add('light-mode');
      localStorage.setItem('theme', 'light');
    }
  }
}

