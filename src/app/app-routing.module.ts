import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { AddCarComponent } from './components/add-car/add-car.component';
import { RentalComponent } from './components/rental/rental.component';
import { AppComponent } from './app.component';
import { ReturnRentalComponent } from './components/return-rental/return-rental.component';
import { UpdateRatesComponent } from './components/update-rates/update-rates.component';
import { WeeklyReportComponent } from './components/weekly-report/weekly-report.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'addCustomer', component: AddCustomerComponent },
  { path: 'addCar', component: AddCarComponent },
  { path: 'rental', component: RentalComponent },
  { path: 'returnRental', component: ReturnRentalComponent },
  { path: 'updateRate', component: UpdateRatesComponent },
  { path: 'weeklyReport', component: WeeklyReportComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
