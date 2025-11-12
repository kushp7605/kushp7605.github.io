import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import emailjs from 'emailjs-com';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { DialogRef } from '@angular/cdk/dialog';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NgIf } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-inquiry-dialog',
  standalone: true, // ✅ Make this component standalone
  imports: [
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule, NgIf, MatIconModule
  ],
  templateUrl: './inquiry-dialog.component.html',
  styleUrls: ['./inquiry-dialog.component.scss']
})
export class InquiryDialogComponent {
  inquiryForm: FormGroup;

constructor(private fb: FormBuilder, public dialogRef: DialogRef, private router: Router,
  @Inject(MAT_DIALOG_DATA) public data: { productName: string; productImage: string }
)
   {
    this.inquiryForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      company: [''],
      city: ['', Validators.required],
      state: ['', Validators.required],
      // message: ['', Validators.required]
      message: [this.getPrefilledMessage(), Validators.required]
    });
  }

  goBack() {
    this.dialogRef.close();
    this.router.navigate(['/services']);
  }

  getPrefilledMessage() {
    return `Hi, I am interested in the product: ${this.data?.productName || ''}.\nPlease provide more details.\n${this.data?.productImage ? 'Image: ' + this.data.productImage : ''}`;
  }


  sendEmail() {
    if (this.inquiryForm.valid) {
      emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        this.inquiryForm.value,
        'YOUR_PUBLIC_KEY'
      ).then(() => {
        alert('Inquiry sent successfully!');
        this.inquiryForm.reset();
      }, (err) => {
        console.error(err);
        alert('Error sending inquiry. Try again.');
      });
    }
  }

  // openEmail() { window.open('mailto:karorienergytechnology@gmail.com'); }
  // openWhatsapp() { window.open('https://wa.me/919998223267'); }
  // openLinkedIn() { window.open('https://www.linkedin.com/company/karori-energy-technology/'); }
  // callDirect() { window.open('tel:+91 9998223267'); }

  openEmail() {
    const subject = encodeURIComponent(`Inquiry about ${this.data.productName}`);
    const body = encodeURIComponent(this.inquiryForm.value.message);
    window.open(`mailto:karorienergytechnology@gmail.com?subject=${subject}&body=${body}`);
  }

  openWhatsapp() {
    // const image = encodeURIComponent(`Inquiry about ${this.data.productImage}`);
    // const message = encodeURIComponent(`Inquiry about ${this.data.productName}`);
    const text = encodeURIComponent(this.inquiryForm.value.message);
    window.open(`https://wa.me/919998223267?text=${text}`);
  }

  openLinkedIn() { window.open('https://www.linkedin.com/company/karori-energy-technology/'); }

  callDirect() { window.open('tel:+91 9998223267'); }
}
