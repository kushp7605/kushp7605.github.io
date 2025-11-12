import {Component, OnInit} from '@angular/core';
import {NgClass, NgForOf, NgIf, NgStyle} from '@angular/common';
import {Router, RouterLink} from '@angular/router';
import {SERVICES_SUMMARY} from '../../Shared/Data/services-summary';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { InquiryDialogComponent } from '../inquiry-dialog/inquiry-dialog.component';

@Component({
  selector: 'app-service-section-home',
    imports: [
    NgForOf,
    NgClass,
    RouterLink,
    NgIf,
    NgStyle,
    MatDialogModule
],
  templateUrl: './service-section-home.component.html',
  standalone: true,
  styleUrl: './service-section-home.component.css'
})
export class ServiceSectionHomeComponent implements OnInit {

  services = SERVICES_SUMMARY

  constructor(private router: Router, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    // Initialize services data if needed
  }

  viewMore(service: any): void {
    this.router.navigate([`/services/${service.id}`]);
  }

  openInquiry(service: any) {
    this.dialog.open(InquiryDialogComponent, {
      data: {
        productName: service.title,
        productImage: service.image
      },
      width: '600px'
    });
  }


  protected readonly servicesSummary = SERVICES_SUMMARY;
}
