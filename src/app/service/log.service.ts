import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Log } from '../model/Log';
import { Owner } from '../model/Owner';
import { SumReport } from '../model/SumReport';
import { DebitByPerson } from '../model/Log';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor(
    private http: HttpClient
  ) { }

  async createDebitLogs(logList: Log[]) {
    return this.http.post<Log[]>('/api/logs',logList).toPromise();
  }

  async getLogsByDates(startDate, endDate) { 
    return this.http.get<Log[]>('/api/logs/' + startDate+'&'+ endDate).toPromise();
  }

  async getLogsByDatesAndOwner(startDate, endDate, owner: Owner) {
    const ownerId= owner.id;
    return this.http.get<Log[]>('/api/logs/' + startDate +'&'+ endDate +'&'+ ownerId).toPromise();
  }

  async getSumReportByDates(startDate, endDate){
    const logList: Log[] = await this.getLogsByDates(startDate, endDate);
    return this.calculateSumReport(logList);
  }

  async createDepositLog(log:Log) {
    return this.http.post<Log>('/api/logs',log).toPromise();
  }

  async moveInLog(owner: Owner) {
    const log = {
      date: new Date().toISOString().slice(0, 10),
      sum: owner.balance,
      actual_balance: owner.balance,
      comment: "Moving in",
      owner: owner,
      id: null
    }
    return this.http.post<Log>('/api/logs', log).toPromise();
  }

  private calculateSumReport(logList: Log[]) {
    let sumReportList: SumReport[] = [];
    logList.forEach(log => {
      if (sumReportList[log.owner.id] != null) {
        sumReportList[log.owner.id].closeBalance = log.actual_balance;
        sumReportList[log.owner.id].expenses += (log.sum < 0 ? -log.sum : 0);
        sumReportList[log.owner.id].deposits += (log.sum > 0 ? log.sum : 0);
      } else {
        sumReportList[log.owner.id] = {
          owner: log.owner,
          expenses: (log.sum < 0 ? -log.sum : 0),
          deposits: (log.sum > 0 ? log.sum : 0),
          openBalance: log.actual_balance,
          closeBalance: log.actual_balance
        }
      }
    });
    let blockSumReport: SumReport = {
      owner: null,
      expenses: 0,
      deposits: 0,
      openBalance: 0,
      closeBalance: 0
    };
    sumReportList = sumReportList.filter(function (sumReport) {
      blockSumReport.expenses += sumReport.expenses
      blockSumReport.deposits += sumReport.deposits
      blockSumReport.openBalance += (sumReport.openBalance < 0 ? -sumReport.openBalance : 0);
      blockSumReport.closeBalance += (sumReport.closeBalance < 0 ? -sumReport.closeBalance : 0);
      return sumReport != null;
    });
    sumReportList.push(blockSumReport);
    return sumReportList;
  }

  calculateDebits(logList: Log[]) {
    const length = logList.length;
    if (length == 0) return [NaN, NaN];
    const minDate = logList[0].date;
    const maxDate = logList[length - 1].date;
    let debitByPerson: DebitByPerson[] = [];
    let debit: number[] = [0, 0];
    let i = 0;

    while (i < length && logList[i].date == minDate ) {
      console.log(logList[i]);
        if (debitByPerson[logList[i].owner.id] == null && logList[i].owner.active) {
          debitByPerson[logList[i].owner.id] = {
            openingDebit: logList[i].actual_balance < 0 ? -logList[i].actual_balance : 0,
            closingDebit: -1
          } 
        } 
      i++;
    }
    i = length-1;
    while (i >= 0 && logList[i].date == maxDate && logList[i].owner.active) {
      if (debitByPerson[logList[i].owner.id] == null) {
        debitByPerson[logList[i].owner.id] = {
          openingDebit: 0,
          closingDebit: -1
        }
      }
      if (debitByPerson[logList[i].owner.id].closingDebit == -1) {
        debitByPerson[logList[i].owner.id].closingDebit = logList[i].actual_balance < 0 ? -logList[i].actual_balance : 0;
      }
      i--;
    }
    debitByPerson.filter(function (de){
      return de != null;
    })
    debitByPerson.forEach(de => {
      console.log(de);
      debit[0] += de.openingDebit;
      debit[1] += de.closingDebit > 0 ? de.closingDebit : 0;
    });
    return debit;
  }

}
