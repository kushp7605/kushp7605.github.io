import {Component, ViewChild, ElementRef, AfterViewInit, Input} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loader',
  imports: [CommonModule],
  templateUrl: './loader.component.html',
  standalone: true,
  styleUrl: './loader.component.scss'
})
export class LoaderComponent implements AfterViewInit {
  @Input() isLoading: boolean = false; // Controls loader visibility
  @ViewChild('loader', { static: false }) loader!: ElementRef;

  rainLines = Array(50).fill(0);
  tiles = Array(20).fill(0); // Creates an array with 5 elements for the tiles

  ngAfterViewInit() {
    // Remove active class on page load
    if (this.loader) {
      this.loader.nativeElement.classList.remove('loader--active');
    }
  }

  toggleLoader() {
    if (this.loader) {
      this.loader.nativeElement.classList.add('loader--active');

      setTimeout(() => {
        this.loader.nativeElement.classList.remove('loader--active');
      }, 5000);
    }
  }
}

