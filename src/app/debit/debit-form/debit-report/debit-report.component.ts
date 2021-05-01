import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Debit } from 'src/app/model/Debit';
import { DebitReport } from 'src/app/model/DebitReport';
import { ApartmentService } from 'src/app/service/apartment.service';
import { OwnerService } from 'src/app/service/owner.service';
import { DebitManagerService } from '../../../service/debit-manager.service';

@Component({
  selector: 'app-debit-report',
  templateUrl: './debit-report.component.html',
  styleUrls: ['./debit-report.component.css']
})
export class DebitReportComponent implements OnInit {

  @Input()
  debit!: Debit;
  ownerAndApartmentList= [];
  debitReportList: DebitReport[] = [];
  

  constructor(
    private ownerService: OwnerService,
    private debitManagerService: DebitManagerService
  ) { }

  async ngOnInit(){
    this.ownerAndApartmentList =
      await this.ownerService.getAllActiveOwnerAndApartment();
    this.debitReportList =
      this.debitManagerService.calculateDebits(this.ownerAndApartmentList, this.debit);
  }




  

}
