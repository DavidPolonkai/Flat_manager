import { Component, Input, OnChanges } from '@angular/core';
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
  openingDebit=0;
  closingDebit=0;

  constructor(private logService: LogService) { }

  ngOnChanges(): void {
    const debits = this.logService.calculateDebits(this.logList);
    this.openingDebit = debits[0];
    this.closingDebit = debits[1];
  }



}
