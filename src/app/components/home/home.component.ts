import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  customers: any;
  cars: any
  rentals: any;
  customerColumns: string[] = ['id', 'name', 'phone','customerType'];
  carColumns: string[] = ['vehicleID', 'ownerId', 'model','year','location','carType','carCategory','dailyRate','weeklyRate'];
  rentalColumns: string[] = ['custID', 'carID', 'rentalStatus','rentalType','noOfDays','noOfWeeks','startDate','endDate'];
  isLoading = false;

  constructor(private commonService: CommonService) { }

  ngOnInit() {
    this.getCustomersData();
    this.getCarsData();
    this.getRentalsData();
  }

  getCustomersData(): void {
    this.commonService.getCustomersData()
      .subscribe({
        next: (data) => {
          this.customers = data.customers;
        },
        error: (e) => console.error(e)
      });
  }

  getCarsData(): void {
    this.commonService.getCarsData()
      .subscribe({
        next: (data) => {
          this.cars = data.cars;
        },
        error: (e) => console.error(e)
      });
  }

  getRentalsData(): void {
    this.commonService.getRentalsData()
      .subscribe({
        next: (data) => {
          this.rentals = data.rentals;
        },
        error: (e) => console.error(e)
      });
  }

}
