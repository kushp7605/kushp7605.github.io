import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, RouterModule, Routes } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

// Import components for routing
import { ServiceDetailsComponent } from './app/components/service-details/service-details.component';
import { ServiceListComponent } from './app/components/service-list/service-list.component';
import { HomeComponent } from './app/components/home/home.component';
import { ContactFormComponent } from './app/components/contact-form/contact-form.component';
import { AboutComponent } from './app/components/about/about.component';
import {NotFoundComponent} from './app/components/not-found/not-found.component';
import { OurTeamComponent } from './app/our-team/our-team.component';

const routes: Routes = [
  // Redirect root to home
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // Components for the routes
  { path: 'home', component: HomeComponent },
  {path: 'about', component: AboutComponent},
  {path: 'team', component: OurTeamComponent},
  { path: 'services', component: ServiceListComponent },
  { path: 'services/:id', component: ServiceDetailsComponent },
  { path: 'contact', component: ContactFormComponent },
  { path: 'about-section-home', component: AboutComponent },
  { path: 'not-found', component: NotFoundComponent },
  // Catch-all route
  { path: '**', redirectTo: '/not-found' }
];

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(routes)
  ]
}).catch(err => console.error(err));
