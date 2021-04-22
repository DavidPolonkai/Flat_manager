import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Log } from '../model/Log';
import { Owner } from '../model/Owner';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor(
    private http: HttpClient
  ) { }

  async createLogs(logList: Log[]) {
    return this.http.post<Log[]>('/api/logs',logList).toPromise();
  }

  async getLogsByDates(startDate, endDate) {
    
    return this.http.get<Log[]>('/api/logs/' + startDate+'&'+ endDate).toPromise();
  }

  async getLogsByDatesAndOwner(startDate, endDate, owner: Owner) {
    const ownerId= owner.id;
    return this.http.get<Log[]>('/api/logs/' + startDate +'&'+ endDate +'&'+ ownerId).toPromise();
  }

  async getSumReportByDatesAndOwner(startDate, endDate, owner: Owner){
    const logList: Log[] = await this.getLogsByDatesAndOwner(startDate, endDate, owner);

  }
  async getSumReportByDates(startDate, endDate){
    const logList: Log[] = await this.getLogsByDates(startDate, endDate);
  }

  private calculateSumReport(logList: Log[]) {
    
  }

}
