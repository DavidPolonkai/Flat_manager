import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Owner } from '../model/Owner';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  constructor(private http: HttpClient) { }

  async addOwner(owner) {
    return this.http.post<Owner>('/api/owners', owner).toPromise();
  }

  async getOldOwnerDebit(id) { 
    return this.http.get<Number>('api/owners/old/' + id).toPromise();
  }

  async calculateAllOwnerBalanceByArea(base) {
    return this.http.post<Number>('api/owners/set/balance/area',base).toPromise();
  }

  async getAllActiveOwnerAndApartment() {
    return this.http.get<Owner[]>('/api/ownersandapartment/active').toPromise();
  }

  async getAllOwner() {
    return this.http.get<Owner[]>('/api/owners').toPromise();
  }

  async updateOneBalance(owner: Owner) {
    return this.http.put<Owner>('/api/owners/balance', owner).toPromise();
  }

  async updateBalance(ownerList: Owner[]) {
    let ex;
    let ret=[];
    for (let i = 0; i < ownerList.length; i++) {
      console.log(ownerList[i]);
      ex = await this.updateOneBalance(ownerList[i]);
      ret.push(ex);
    } 
  }
}
