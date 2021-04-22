import { Component, Input, OnInit } from '@angular/core';
import { Log } from '../../model/Log';
@Component({
  selector: 'app-report',
  templateUrl: './log-report.component.html',
  styleUrls: ['./log-report.component.css']
})
export class LogReportComponent implements OnInit {

  @Input()
  logList: Log[];
  openingDebit=0;
  closingDebit=0;

  constructor() { }

  ngOnInit(): void {
    const length = this.logList.length-1;
    const minDate = this.logList[0].date;
    const maxDate = this.logList[length].date;
    let i = 0;
    while (this.logList[i].date == minDate) {
      if (this.logList[i].actual_balance < 0) {
        this.openingDebit += this.logList[i].actual_balance;
      }
      i++;
    }
    i = length;
    while (this.logList[i].date == maxDate) {
      if (this.logList[i].actual_balance < 0) {
        this.closingDebit += this.logList[i].actual_balance;
      }
      i--;
    }
    if (this.closingDebit > 0)
      this.closingDebit = 0;
    else
      this.closingDebit *= -1;
    
    if (this.openingDebit > 0)
      this.openingDebit = 0;
    else
      this.openingDebit *= -1;
  }



}
