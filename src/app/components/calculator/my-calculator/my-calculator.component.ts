import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PirceServiseService } from './../../../calculateProductPrice/pirce-servise.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-my-calculator',
  templateUrl: './my-calculator.component.html',
  styleUrls: ['./my-calculator.component.css']
})
export class MyCalculatorComponent implements OnInit {
  calculatorForm!: FormGroup;

  constructor(private fb: FormBuilder, private priceService: PirceServiseService) {}

  ngOnInit(): void {
    this.calculatorForm = this.fb.group({
      from: ['', Validators.required],
      to: ['', Validators.required],
      container: ['', Validators.required],
      start: ['', Validators.required],
      weight: ['', [Validators.required]],
      seaLine: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.calculatorForm.valid) {
      const formData = this.calculatorForm.value;
      this.priceService.calculate(formData).subscribe(
        (response) => {
          Swal.fire({
            text: 'მონაცემები წარმატებით გაიგზავნა',
            confirmButtonText: 'კარგი'
          });
          console.log('Form Submitted!', response);
        },
        (error) => {
          Swal.fire({
            text: 'მონაცემები წარმატებით გაიგზავნა',
            confirmButtonText: 'კარგი'
          });
          console.error('Form submission error', error);
        }
      );
    } else {
      console.log('Form is invalid!');
    }
  }
}