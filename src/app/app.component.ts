import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Car_UI_app';
  
routes =  [
  { path: 'home',label:'Home' },
  { path: 'addCustomer', label:'Add Customer' },
  { path: 'addCar', label:'Add Car' },
  { path: 'rental',  label:'Add Rental' },
  { path: 'returnRental',  label:'Return Rental' },
  { path: 'updateRate',  label:'Update Rate' },
 ];
}
