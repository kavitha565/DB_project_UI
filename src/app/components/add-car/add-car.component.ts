import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.scss']
})
export class AddCarComponent implements OnInit {
  form!: FormGroup;
  carTypes: string[] = ['Compact','Medium','Large','SUV','Truck','Van']
  carCategories: string[] = ['Luxury','Regular']
  constructor(private fb: FormBuilder,private commonService: CommonService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      vehicleID: [''],
      ownerId: [''],
      model: [''],
      year: [''],
      location: [''],
      carType: [''],
      carCategory: [''],
      dailyRate: [''],
      weeklyRate: ['']
    });
  }

  onSubmit() {
    const formData = this.form.value;
    this.commonService.addCar(formData)
    .subscribe({
      next: (data) => {
        alert("Car aded successfully");
        console.log('Form submitted successfully', data);
        
      },
      error: (e) => {
        alert("Error occured while adding car. Please try again");
        console.error('Error submitting form', e);
        
      }
    });
  }

}
