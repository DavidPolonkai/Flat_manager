import { Component, Input, OnInit } from '@angular/core';
import { SumReport } from 'src/app/model/SumReport';

@Component({
  selector: 'app-sum-report-entity',
  templateUrl: './sum-report-entity.component.html',
  styleUrls: ['./sum-report-entity.component.css']
})
export class SumReportEntityComponent implements OnInit {
  @Input()
  sumReport: SumReport;

  constructor() { }

  ngOnInit(): void {
  }

}
