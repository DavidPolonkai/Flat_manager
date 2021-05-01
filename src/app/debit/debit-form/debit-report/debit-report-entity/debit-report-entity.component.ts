import { Component, Input, OnInit } from '@angular/core';
import { DebitReport } from 'src/app/model/DebitReport';

@Component({
  selector: 'app-debit-report-entity',
  templateUrl: './debit-report-entity.component.html',
  styleUrls: ['./debit-report-entity.component.css']
})
export class DebitReportEntityComponent implements OnInit {

  @Input()
  debitReport: DebitReport;

  constructor() { }

  ngOnInit(): void {
  }

}
