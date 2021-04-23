import { Injectable } from '@angular/core';
import { O_NOFOLLOW } from 'node:constants';
import { UsingJoinTableIsNotAllowedError } from 'typeorm';
import { Log } from '../model/Log';
import { Owner } from '../model/Owner';
import { LogService } from './log.service';
import { OwnerService } from './owner.service';

@Injectable({
  providedIn: 'root'
})
export class DepositManagerService {
  private static readonly message: string = "Deposit to owner";

  addDebit(owner: Owner, deposit: number) {
    owner.balance += deposit;
    const log: Log = {
      id: null,
      date: new Date().toISOString().slice(0, 10),
      sum: deposit,
      actual_balance: owner.balance,
      comment: DepositManagerService.message,
      owner: owner,
    };
    this.ownerService.updateOneBalance(owner);
    this.logService.createDepositLog(log);
  }

  constructor(
    private ownerService: OwnerService,
    private logService: LogService
  ) { }
}
