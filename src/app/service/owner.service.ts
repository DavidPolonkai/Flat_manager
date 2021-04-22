import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Owner } from 'backend/src/entity/Owner';

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

  async updateBalance(owner: Owner[]) {
    return this.http.put<Owner[]>('/api/owners',owner).toPromise();
  }
}
