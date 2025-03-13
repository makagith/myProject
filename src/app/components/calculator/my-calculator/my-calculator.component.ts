import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PirceServiseService } from './../../../calculateProductPrice/pirce-servise.service';

@Component({
  selector: 'app-my-calculator',
  templateUrl: './my-calculator.component.html',
  styleUrls: ['./my-calculator.component.css']
})
export class MyCalculatorComponent implements OnInit {
  calculatorForm!: FormGroup;
  isSubmitSuccessful = false;

  constructor(private fb: FormBuilder, private priceService: PirceServiseService) {}

  ngOnInit(): void {
    this.calculatorForm = this.fb.group({
      from: ['', ],
      to: ['', ],
      container: ['',],
      start: ['', ],
      weight: ['', ],
      seaLine: ['',],
    });
  }

  onSubmit(): void {
    if (this.calculatorForm.valid) {
      const formData = this.calculatorForm.value;
      this.priceService.calculate(formData).subscribe(
        (response) => {
          // მონაცემები წარმატებით გაიგზავნა
          alert('მონაცემები წარმატებით გაიგზავნა');
          this.isSubmitSuccessful = true;
          console.log('Form Submitted!', response);
        },
        (error) => {
          // შეცდომის დროს შეგიძლიათ გამოიყენოთ სხვა alert
          alert('მოხდა შეცდომა!');
          console.error('Form submission error', error);
        }
      );
    } else {
      console.log('Form is invalid!');
    }
  }
}
