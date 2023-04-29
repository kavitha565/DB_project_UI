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
  owners: any;
  availabilityData: any;
  customerColumns: string[] = ['id', 'name', 'phone','customerType'];
  ownerColumns: string[] = ['id', 'name', 'type'];
  availabilityColumns: string[] = ['carID', 'avaliabilityID', 'startDate', 'endDate'];
  carColumns: string[] = ['vehicleID', 'ownerId', 'model','year','location','carType','carCategory','dailyRate','weeklyRate'];
  rentalColumns: string[] = ['custID', 'carID', 'rentalStatus','rentalType','noOfDays','noOfWeeks','startDate','endDate', 'amountDue'];
  isLoading = false;

  constructor(private commonService: CommonService) { }

  ngOnInit() {
    this.getCustomersData();
    this.getCarsData();
    this.getRentalsData();
    this.getOwnersData();
    this.getAvailabilityData();
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

  getOwnersData(): void {
    this.commonService.getOwnersData()
      .subscribe({
        next: (data) => {
          this.owners = data.owners;
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

  getAvailabilityData(): void {
    this.commonService.getAvailabilityData()
      .subscribe({
        next: (data) => {
          this.availabilityData = data.availabilityData;
        },
        error: (e) => console.error(e)
      });
  }

}
