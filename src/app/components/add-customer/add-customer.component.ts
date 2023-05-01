import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {
  form!: FormGroup;
  message!: string;
  customerTypes: string[] = ['Business','Individual'];
  constructor( private fb: FormBuilder,private commonService: CommonService) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: [''],
      phone: [''],
      customerType: ['']
    });
  }

  onSubmit() {
      // Make POST call here
      const formData = this.form.value;
      this.commonService.addCustomer(formData)
      .subscribe({
        next: (data) => {
          alert("Customer aded successfully");
          console.log('Form submitted successfully', data);
          
        },
        error: (e) => {
          alert("Error occured while adding customer. Please try again");
          console.error('Error submitting form', e);
          
        }
      });
  }

}
