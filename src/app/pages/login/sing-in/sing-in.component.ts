// sing-in.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.css']
})
export class SingInComponent {
  // loginForm: FormGroup;

  // constructor(private fb: FormBuilder) {
  //   this.loginForm = this.fb.group({
  //     email: ['', [Validators.required, Validators.email]],
  //     password: ['', [Validators.required, Validators.minLength(6)]],
  //   });
  // }

  // onSubmit() {
  //   if (this.loginForm.valid) {
  //     console.log('Form submitted:', this.loginForm.value);
  //   } else {
  //     console.log('Form is invalid');
  //   }
  // }
}
