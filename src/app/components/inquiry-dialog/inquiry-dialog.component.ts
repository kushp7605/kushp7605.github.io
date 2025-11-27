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
    ReactiveFormsModule, MatIconModule, NgIf
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
    return `Hello, I am interested in your product "${this.data?.productName || ''}" and would appreciate it if you could provide comprehensive details such as specifications, pricing, delivery timelines, and support options.\nI look forward to your response at the earliest convenience.\nBest regards.`;
}



  // sendEmail() {
  //   if (this.inquiryForm.valid) {
  //     emailjs.send(
  //       'YOUR_SERVICE_ID',
  //       'YOUR_TEMPLATE_ID',
  //       this.inquiryForm.value,
  //       'YOUR_PUBLIC_KEY'
  //     ).then(() => {
  //       alert('Inquiry sent successfully!');
  //       this.inquiryForm.reset();
  //     }, (err) => {
  //       console.error(err);
  //       alert('Error sending inquiry. Try again.');
  //     });
  //   }
  // }

//   openGoogleForm() {
//   const productName = this.data.productName || 'Product Inquiry';
//   const productImage = this.data.productImage || '';

//   // Your Google Form URL
//   const baseFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSepm3RTXFvO3gJ6o82X677eegSKZjD1-f0Dcp-Xg8nynPf7xA/viewform?usp=pp_url';
//   window.open(baseFormUrl, '_blank');
// }

// openGoogleForm() {
//   window.open(
//     'https://docs.google.com/forms/d/e/1FAIpQLSepm3RTXFvO3gJ6o82X677eegSKZjD1-f0Dcp-Xg8nynPf7xA/viewform',
//     '_blank'
//   );
// }

openGoogleForm() {
  const productName = encodeURIComponent(this.data?.productName || '');

  const formUrl = `https://docs.google.com/forms/d/e/1FAIpQLSepm3RTXFvO3gJ6o82X677eegSKZjD1-f0Dcp-Xg8nynPf7xA/viewform?usp=pp_url&entry.1291738391=${productName}`;

  window.open(formUrl, '_blank');
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
    const message = encodeURIComponent(`Inquiry about ${this.data.productName}`);
    const text = encodeURIComponent(this.inquiryForm.value.message);
    window.open(`https://wa.me/919998223267?text=${text}`);
  }

  openLinkedIn() { window.open('https://www.linkedin.com/company/karori-energy-technology/'); }

  callDirect() { window.open('tel:+91 9998223267'); }
}
