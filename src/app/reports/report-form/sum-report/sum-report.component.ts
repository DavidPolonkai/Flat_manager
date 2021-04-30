import { Component, Input, OnInit } from '@angular/core';
import { SumReport } from 'src/app/model/SumReport';

@Component({
  selector: 'app-sum-report',
  templateUrl: './sum-report.component.html',
  styleUrls: ['./sum-report.component.css']
})
export class ReportSumComponent implements OnInit {
  @Input()
  sumReportList: SumReport[];
  blockSumReport: SumReport; 

  constructor() { }

  ngOnInit(): void {
    this.blockSumReport = this.sumReportList.pop();
  }

}
