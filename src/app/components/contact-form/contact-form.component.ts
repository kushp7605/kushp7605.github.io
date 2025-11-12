import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NgIf } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule, HeaderComponent, FooterComponent],
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
  contactForm: FormGroup;
  isSubmitting = false;
  hasSubmitted = false;
  successMessage = '';
  errorMessage = '';

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      company: [''],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    this.hasSubmitted = true;

    if (this.contactForm.valid) {
      this.isSubmitting = true;
      this.successMessage = '';
      this.errorMessage = '';

      const formData: ContactFormData = this.contactForm.value;

      this.http.post<{ message: string }>('https://formspree.io/f/mgvprrnw', formData).subscribe({
        next: (response) => {
          this.successMessage = response.message;
          this.contactForm.reset();
          this.hasSubmitted = false;
          setTimeout(() => (this.successMessage = ''), 5000);
        },
        error: (error) => {
          this.errorMessage = error?.error?.message || 'Failed to send message. Please try again.';
          setTimeout(() => (this.errorMessage = ''), 5000);
        }
      }).add(() => {
        this.isSubmitting = false;
      });
    }
  }
}
