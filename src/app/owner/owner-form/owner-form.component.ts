import { Component, OnInit } from '@angular/core';
import { FormBuilder ,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OwnerService } from '../../service/owner.service';
import { Apartment } from '../../model/Apartment';
import { ApartmentService } from '../../service/apartment.service';


@Component({
  selector: 'app-owner-form',
  templateUrl: './owner-form.component.html',
  styleUrls: ['./owner-form.component.css']
})
export class OwnerFormComponent implements OnInit {
  ownerForm: FormGroup = this.formBuilder.group({
    id: [], 
    name: ['',Validators.required],
    active: [true],
    balance: {value: 0, disabled: true},
    apartment: [Validators.required]
  });

  apartmentList: Apartment[];

  constructor(
    private formBuilder: FormBuilder,
    private ownerService: OwnerService,
    private router: Router,
    private apartmentService: ApartmentService
  ) { }


  get balance() {
    return this.ownerForm.get('balance');
  }

  get id() {
    return this.ownerForm.get('id');
  }

  addOwner() {
    const owner = this.ownerForm.value;
    owner.balance = this.ownerForm.get('balance').value;
    console.log(owner);
    this.ownerService.addOwner(owner);
    this.router.navigateByUrl('/');
  }

  compareApartments(apartment1: Apartment, apartment2: Apartment):boolean {
    return apartment1 && apartment2 && apartment1.id === apartment2.id;
  }

  async ngOnInit() {
    this.apartmentList = await this.apartmentService.getApartments();
    console.log(this.apartmentList);
  }

  async fillBalance() {
    const id = this.ownerForm.value.apartment.id;
    const oldBalance = await this.ownerService.getOldOwnerDebit(id);
    if (oldBalance < 0) {
      this.ownerForm.patchValue({ balance: oldBalance["balance"] });
    }
  }



}

