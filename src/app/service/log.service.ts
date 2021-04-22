import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Log } from '../model/Log';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor(
    private http: HttpClient
  ) { }

  createLogs(logList: Log[]) {
    return this.http.
  }
}
