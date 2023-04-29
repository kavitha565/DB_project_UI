import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-update-rates',
  templateUrl: './update-rates.component.html',
  styleUrls: ['./update-rates.component.scss']
})
export class UpdateRatesComponent implements OnInit {
  form!: FormGroup;
  carTypes: string[] = ['Compact','Medium','Large','SUV','Truck','Van']
  constructor(private fb: FormBuilder,private commonService: CommonService) { }


  ngOnInit(): void {
    this.form = this.fb.group({
      carType: [''],
      dailyRate: [''],
      weeklyRate: ['']
   })
  }

  onSubmit() {
    const formData = this.form.value;
    this.commonService.updateRates(formData)
    .subscribe({
      next: (data) => {
        alert("Car rates updated successfully");
        this.form.reset();
      },
      error: (e) => {
        alert("Error occured while updating car rates. Please try again");
      }
    });
  }

}
