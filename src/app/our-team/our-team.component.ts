import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';

@Component({
  selector: 'app-our-team',
  imports: [FooterComponent, HeaderComponent],
  templateUrl: './our-team.component.html',
  styleUrl: './our-team.component.scss',
  standalone: true
})
export class OurTeamComponent {

}
