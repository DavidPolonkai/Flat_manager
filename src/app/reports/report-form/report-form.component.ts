import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Log } from '../../model/Log';
import { Owner } from '../../model/Owner';
import { SumReport } from '../../model/SumReport';
import { LogService } from '../../service/log.service';
import { OwnerService } from '../../service/owner.service';

@Component({
  selector: 'app-report-form',
  templateUrl: './report-form.component.html',
  styleUrls: ['./report-form.component.css']
})
export class ReportFormComponent implements OnInit {
  date = new Date();
  dateMinusOneMonth = new Date(this.date.getFullYear(),this.date.getMonth()-1,this.date.getDate())
  reportForm: FormGroup = this.formBuilder.group({
    endDate: [this.date.toISOString().slice(0,10),[Validators.required]],
    startDate: [this.dateMinusOneMonth.toISOString().slice(0,10),[Validators.required]],
    owner: []
  });
  ownerList:Owner[] =[];
  logList: Log[] = [];
  sumReportList: SumReport[] = [];
  visibleLog = false;
  visibleSum = false;
  isOwnerOnly = false;

  constructor(
    private formBuilder: FormBuilder,
    private ownerService: OwnerService,
    private logService: LogService
  ) {}

  async ngOnInit(){
    this.ownerList = await this.ownerService.getAllOwner();
  }

  async createLogReport() {
    const values = this.reportForm.value;
    this.logList = [];
    if (values.owner == null) {
      this.isOwnerOnly = false;
      this.logList = await this.logService.getLogsByDates(values.startDate, values.endDate);
    }
    else {
      this.isOwnerOnly = true;
      this.logList = await this.logService.getLogsByDatesAndOwner(values.startDate, values.endDate, values.owner);
    }
    this.visibleSum = false;
    this.visibleLog = (this.logList.length > 0);
  }

  async createSumReport() {
    const values = this.reportForm.value;
    this.sumReportList = await this.logService.getSumReportByDates(values.startDate, values.endDate);
    this.visibleLog = false;
    this.visibleSum = (this.sumReportList.length > 0)
  }

}
