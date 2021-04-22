import { Injectable } from '@angular/core';
import { Apartment } from 'src/app/model/Apartment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApartmentService {

  constructor(private http:HttpClient) { }

  async getApartments() {
    return this.http.get<Apartment[]>('/api/apartments').toPromise();
  }

}
