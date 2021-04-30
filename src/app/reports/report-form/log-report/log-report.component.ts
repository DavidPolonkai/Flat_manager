import { Component, Input, OnInit } from '@angular/core';
import { LogService } from 'src/app/service/log.service';
import { Log } from '../../../model/Log';
@Component({
  selector: 'app-log-report',
  templateUrl: './log-report.component.html',
  styleUrls: ['./log-report.component.css']
})
export class LogReportComponent implements OnInit {

  @Input()
  logList: Log[];
  openingDebit=0;
  closingDebit=0;

  constructor(private logService: LogService) { }

  ngOnInit(): void {
    const debits = this.logService.calculateDebits(this.logList);
    this.openingDebit = debits[0];
    this.closingDebit = debits[1];
    console.log(this.logList);
  }



}
