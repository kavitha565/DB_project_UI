import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-return-rental',
  templateUrl: './return-rental.component.html',
  styleUrls: ['./return-rental.component.scss']
})
export class ReturnRentalComponent implements OnInit {
  rentals: any;
  rentalColumns: string[] = ['custID', 'carID', 'rentalStatus','rentalType','noOfDays','noOfWeeks','startDate','endDate','action'];
  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    this.getRentalsData();
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

  returnCar(rentalID:any, carID: any){
    const payload = {
      rentalID,
      carID
    }
    this.commonService.returnRental(payload)
      .subscribe({
        next: (data) => {
          alert(data.rentalAmount);
        },
        error: (e) => console.error(e)
      });
  }
}
