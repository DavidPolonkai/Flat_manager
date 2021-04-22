import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Log } from '../model/Log';
import { Owner } from '../model/Owner';
import { SumReport } from '../model/SumReport';
import { LogService } from '../service/log.service';
import { OwnerService } from '../service/owner.service';

@Component({
  selector: 'app-report-form',
  templateUrl: './report-form.component.html',
  styleUrls: ['./report-form.component.css']
})
export class ReportFormComponent implements OnInit {
  reportForm: FormGroup = this.formBuilder.group({
    startDate: [Validators.required],
    endDate: [Validators.required],
    owner: []
  });
  ownerList:Owner[] =[];
  logList: Log[] = [];
  sumReportList: SumReport[] = [];
  visibleLog = false;
  visibleSum = false;

  constructor(
    private formBuilder: FormBuilder,
    private ownerService: OwnerService,
    private logService: LogService
  ) { }

  async ngOnInit(){
    this.ownerList = await this.ownerService.getAllOwner();
  }

  async createLogReport() {
    const values = this.reportForm.value;
    this.logList = [];
    console.log(values.owner);
    if (values.owner == null) {
      this.logList = await this.logService.getLogsByDates(values.startDate, values.endDate);
    }
    else {
      this.logList = await this.logService.getLogsByDatesAndOwner(values.startDate, values.endDate, values.owner);
    }
    this.visibleLog = (this.logList.length>0);
  }

  async createSumReport() {
    const values = this.reportForm.value;
    this.sumReportList = [];
    console.log(values.owner);
    if (values.owner == null) {
     // this.sumReportList = await this.logService.getSumReportByDates(values.startDate, values.endDate);
    }
    else {
     // this.sumReportList = await this.logService.getSumReportByDatesAndOwner(values.startDate, values.endDate, values.owner);
    }
  }

}
