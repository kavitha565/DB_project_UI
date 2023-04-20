import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.scss']
})
export class RentalComponent implements OnInit {
  availabilityForm!: FormGroup;
  rentalForm!: FormGroup;
  carTypes: string[] = ['Compact','Medium','Large','SUV','Truck','Van']
  carCategories: string[] = ['Luxury','Regular']
  rentalStatusTypes: string[] = ['Active','Scheduled']
  rentalTypes: string[] = ['Daily','Weekly']
  carColumns: string[] = ['vehicleID', 'ownerId', 'model','year','location','carType','carCategory','dailyRate','weeklyRate','action'];
  rentals: any = [];
  showRentForm: boolean = false;
  availabilityFormSubmitted: boolean = false;
  constructor(private fb: FormBuilder,private commonService: CommonService) { }

  ngOnInit(): void {
    this.availabilityForm = this.fb.group({
      carType: ['Compact'],
      carCategory: ['Regular'],
      startDate: ['2023-05-02'],
      endDate: ['2023-05-04']
    });

    this.rentalForm = this.fb.group({
      custID: [''],
      carID: [''],
      rentalStatus: [''],
      rentalType: [''],
      noOfDays: [''],
      noOfWeeks: [''],
      startDate: ['2023-05-02']
    });
  }

  onSubmit() {
    // Make POST call here
    this.availabilityFormSubmitted = true;
    const formData = this.availabilityForm.value;
    this.commonService.getAvailableRentals(formData)
    .subscribe({
      next: (data) => {
        this.rentals = data.availableCars
        this.availabilityForm.reset();
      },
      error: (e) => {
        alert('Error occured while getting avaliable cars. Please try again');
        console.log('Error occured while getting avaliable cars. Please try again');
      }
    });
  }

  rentFormSubmit() {
    // Make POST call here
    const formData = this.rentalForm.value;
    this.commonService.addRental(formData)
    .subscribe({
      next: (data) => {
        alert("New Rental added successfully");
        this.rentalForm.reset();
      },
      error: (e) => {
        alert('Error occured while adding new rental. Please try again');
      }
    });
  }

  rentCar(carId: any){ 
    console.log(carId);
    this.showRentForm = true;
    this.rentalForm.get('carID')?.setValue(carId);
   }

   goBack(){
    this.showRentForm = false;
   }

}
