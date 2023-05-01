import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-weekly-report',
  templateUrl: './weekly-report.component.html',
  styleUrls: ['./weekly-report.component.scss']
})
export class WeeklyReportComponent  implements OnInit {
  form!: FormGroup;
  weeklyEarnings = [];
  reportColumns = ["owner_id","owner_name","week_number","carType","units_owned","weekly_earnings"];
  constructor(private fb: FormBuilder,private commonService: CommonService) { }


  ngOnInit(): void {
    this.form = this.fb.group({
      ownerId: ['1'],
      startDate: ['2023-05-15'],
      endDate: ['2023-05-31']
   })
  }

  onSubmit() {
    const formData = this.form.value;
    this.commonService.getWeeklyReport(formData)
    .subscribe({
      next: (data) => {
        this.weeklyEarnings = data;
        
      },
      error: (e) => {
        alert("Error occured while fetching weekly report!");
      }
    });
  }

}
