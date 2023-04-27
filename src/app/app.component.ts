import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Car-Rental-UI';
  
routes =  [
  { path: 'home',label:'home' },
  { path: 'addCustomer', label:'addCustomer' },
  { path: 'addCar', label:'addCar' },
  { path: 'rental',  label:'rental' },
 ];
}
