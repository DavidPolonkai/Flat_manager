import { Component, Input, OnChanges } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { LogService } from 'src/app/service/log.service';
import { Log } from '../../../model/Log';
@Component({
  selector: 'app-log-report',
  templateUrl: './log-report.component.html',
  styleUrls: ['./log-report.component.css']
})
export class LogReportComponent implements OnChanges {

  @Input()
  logList: Log[];
  @Input()
  isOwnerOnly: boolean;
  openingDebit=0;
  closingDebit = 0;

  constructor(private logService: LogService,
  private formBuilder:FormBuilder) { }

  ngOnChanges(): void {
    const debits = this.logService.calculateDebits(this.logList,this.isOwnerOnly);
    this.openingDebit = debits[0];
    this.closingDebit = debits[1];
  }




}
