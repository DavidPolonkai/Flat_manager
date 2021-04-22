import { Injectable } from '@angular/core';
import { Debit } from '../model/Debit';
import { DebitReport } from '../model/DebitReport';
import { Owner } from '../model/Owner';
import { Log } from '../model/Log';
import { LogService } from './log.service';
import { OwnerService } from './owner.service';
@Injectable({
  providedIn: 'root'
})
export class DebitManagerService {

  debitReportList: DebitReport[];
  debit: Debit;

  constructor(
    private ownerService: OwnerService,
    private logService: LogService
  ) { }



  calculateDebits(ownerAndApartmentList, debit: Debit) {
    this.debitReportList = [];
    this.debit = debit;
    switch (debit.type.id) {
      case 1:
        this.calculateCubicMeterPrice(ownerAndApartmentList);
        break;
      case 2:
        this.calculateSumDebitPrice(ownerAndApartmentList);
        break;
    }
    return this.debitReportList;
  }

  private calculateCubicMeterPrice(ownerAndApartmentList) {
    for (let i = 0; i < ownerAndApartmentList.length; i++) {
      let actual = ownerAndApartmentList[i];
      this.debitReportList.push({
      debit: actual.apartment.area * this.debit.sum,
      balance: actual.balance,
      newBalance: actual.balance - actual.apartment.area * this.debit.sum,
      area: actual.apartment.area,
      name: actual.name,
      floorAndDoor: actual.apartment.floor.toString() + '/' + actual.apartment.door.toString(),
      ownerid: actual.id
      });
    }
  }

  private calculateSumDebitPrice(ownerAndApartmentList) {
    let sumArea = 0;
    for (let i = 0; i < ownerAndApartmentList.length; i++) {
      sumArea += ownerAndApartmentList[i].area;
    }
    const pricePerCubicMeter = this.debit.sum / sumArea;
    for (let i = 0; i < ownerAndApartmentList.length; i++) {
      let actual = ownerAndApartmentList[i];
      this.debitReportList.push({
        debit: actual.apartment.area * pricePerCubicMeter,
        balance: actual.balance,
        newBalance: actual.balance - actual.apartment.area * pricePerCubicMeter,
        name: actual.name,
        area: actual.apartment.area,
        floorAndDoor: actual.apartment.floor.toString() + '/' + actual.apartment.door.toString(),
        ownerid: actual.id
      });    
    }
  }

  create() {
    let ownerList: Owner[] = [];
    let logList: Log[] = [];
    const now = new Date().toISOString().slice(0,9);
    console.log(now);
    this.debitReportList.forEach(debitReport => {
      let owner: Owner = {
        id: debitReport.ownerid,
        name: '',
        active: true,
        balance: debitReport.newBalance,
        apartment: undefined
      };
      ownerList.push(owner);
      logList.push({
        date: now,
        sum: -debitReport.debit,
        actual_balance: debitReport.newBalance,
        comment: this.debit.comment,
        owner: owner,
        id: null
      });
    });
    this.logService.createLogs(logList);
    this.ownerService.updateBalance(ownerList);
  }

}
