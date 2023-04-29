import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http'
import { environment } from '../../environments/environment'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http:HttpClient) { }

  getCustomersData(): Observable<any> {
    return this.http.get<any>(environment.endpoint.customersUrl);
  }

  getOwnersData(): Observable<any> {
    return this.http.get<any>(environment.endpoint.ownersUrl);
  }

  getCarsData(): Observable<any> {
    return this.http.get<any>(environment.endpoint.carsUrl);
  }

  getRentalsData(): Observable<any> {
    return this.http.get<any>(environment.endpoint.rentalUrl);
  }

  addCustomer(payload: any): Observable<any> {
    return this.http.post<any>(environment.endpoint.customersUrl, payload);
  }

  addCar(payload: any): Observable<any> {
    return this.http.post<any>(environment.endpoint.carsUrl, payload);
  }

  getAvailabilityData(): Observable<any> {
    return this.http.get<any>(environment.endpoint.availabilityUrl);
  }

  getAvailableRentals(payload: any): Observable<any> {
    return this.http.post<any>(environment.endpoint.availabilityUrl, payload);
  }

  addRental(payload: any): Observable<any> {
    return this.http.post<any>(environment.endpoint.rentalUrl, payload);
  }

  returnRental(payload: any): Observable<any> {
    return this.http.post<any>(environment.endpoint.returnUrl, payload);
  }

  updateRates(payload: any): Observable<any> {
    return this.http.post<any>(environment.endpoint.updateRates, payload);
  }

  getWeeklyReport(payload: any): Observable<any> {
    return this.http.post<any>(environment.endpoint.weeklyReport, payload);
  }

}