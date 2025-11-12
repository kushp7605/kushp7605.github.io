import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { SERVICES_SUMMARY } from '../../Shared/Data/services-summary';
import { SERVICES_DETAILS } from '../../Shared/Data/services-details';
import {NgClass, NgForOf, NgIf} from '@angular/common';
import {FooterComponent} from '../footer/footer.component';
import {HeaderComponent} from '../header/header.component';
import { ServiceSectionHomeComponent } from '../service-section-home/service-section-home.component';
import { MatDialog } from '@angular/material/dialog';
import { InquiryDialogComponent } from '../inquiry-dialog/inquiry-dialog.component';

@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.css'],
  imports: [
    NgIf,
    FooterComponent,
    HeaderComponent,
    RouterLink,
    RouterLinkActive,
  ],
  standalone: true
})
export class ServiceDetailsComponent implements OnInit {

  servicesSummary = SERVICES_SUMMARY; // For "More Services" section
  servicesDetails = SERVICES_DETAILS; // For detailed service description
  selectedService: any = null;
  filteredServices: any[] = [];

  constructor(private route: ActivatedRoute, private cdRef: ChangeDetectorRef, private router: Router, private dialog: MatDialog) {}
  
  openInquiry(service: any) {
    this.dialog.open(InquiryDialogComponent, {
      data: {
        productName: service.title,
        productImage: service.image
      },
      width: '600px'
    });
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.selectedService = this.servicesDetails.find(service => service.id === id);

    // Filter services to exclude the selected one
    this.filteredServices = this.servicesSummary.filter(service => service.id !== id);
  }

  getEffectiveIndex(service: any): number {
    // Get index from SERVICES_SUMMARY, skipping the selected service
    const visibleServices = this.servicesSummary.filter(s => s.id !== this.selectedService?.id);
    return visibleServices.findIndex(s => s.id === service.id);
  }

  navigateToService(id: number): void {
    this.router.navigate(['/services', id]).then(() => {
      window.location.reload();
    });
  }
}
