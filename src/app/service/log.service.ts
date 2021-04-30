import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Log } from '../model/Log';
import { Owner } from '../model/Owner';
import { SumReport } from '../model/SumReport';

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
    
    const length = logList.length-1;
    const minDate = logList[0].date;
    const maxDate = logList[length].date;
    let debit: number[] = [0,0];
    let i = 0;
    console.log(logList.length);
    while (logList[i].date == minDate && i<logList.length-1) {
      console.log(logList[i].date);
      if (logList[i].actual_balance < 0) {
        debit[0] += logList[i].actual_balance;
      }
      i++;
    }
    i = length;
    while (logList[i].date == maxDate && i<logList.length-1) {
      if (logList[i].actual_balance < 0) {
        debit[1] += logList[i].actual_balance;
      }
      i--;
    }
    if (debit[1] > 0) {
      debit[1] = 0;
    }
    else {
      debit[1] *= -1;
    }
    if (debit[0] > 0) {
      debit[0] = 0;
    }
    else {
      debit[0] *= -1;
    }

    return debit;
  }

}
