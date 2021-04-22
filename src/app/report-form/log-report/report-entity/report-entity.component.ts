import { Component, Input, OnInit } from '@angular/core';
import { Log } from '../../../model/Log';

@Component({
  selector: 'app-report-entity',
  templateUrl: './report-entity.component.html',
  styleUrls: ['./report-entity.component.css']
})
export class ReportEntityComponent implements OnInit {

  @Input()
    log: Log;

  constructor() { }

  ngOnInit(): void {
  }

}
