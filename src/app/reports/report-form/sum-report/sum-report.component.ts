import { Component, Input, OnChanges} from '@angular/core';
import { SumReport } from 'src/app/model/SumReport';

@Component({
  selector: 'app-sum-report',
  templateUrl: './sum-report.component.html',
  styleUrls: ['./sum-report.component.css']
})
export class ReportSumComponent implements OnChanges {
  @Input()
  sumReportList: SumReport[];
  blockSumReport: SumReport; 

  constructor() { }

  ngOnChanges(): void {
    this.blockSumReport = this.sumReportList.pop();
  }

}
