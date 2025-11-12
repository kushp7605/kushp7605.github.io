import {Component} from '@angular/core';
import {ServiceSectionHomeComponent} from '../service-section-home/service-section-home.component';
import {HeaderComponent} from '../header/header.component';
import {FooterComponent} from '../footer/footer.component';


@Component({
  selector: 'app-service-list',
  imports: [
    ServiceSectionHomeComponent,
    FooterComponent,
    HeaderComponent

  ],
  templateUrl: './service-list.component.html',
  standalone: true,
  styleUrl: './service-list.component.css'
})
export class ServiceListComponent {
}
