import { Component, Input, OnInit } from '@angular/core';
import { Log } from '../../../../model/Log';

@Component({
  selector: 'app-log-report-entity',
  templateUrl: './log-report-entity.component.html',
  styleUrls: ['./log-report-entity.component.css']
})
export class LogReportEntityComponent implements OnInit {

  @Input()
  log: Log;

  constructor() { }

  ngOnInit(): void {
  }

}
