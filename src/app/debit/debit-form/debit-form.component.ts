import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DebitManagerService } from 'src/app/service/debit-manager.service';
import { Apartment } from '../../model/Apartment';
import { Debit } from '../../model/Debit';
import { DebitType, debitTypeConst } from '../../model/DebitType';
import { Owner } from '../../model/Owner';
import { ApartmentService } from '../../service/apartment.service';
import { OwnerService } from '../../service/owner.service';

@Component({
  selector: 'app-debit-form',
  templateUrl: './debit-form.component.html',
  styleUrls: ['./debit-form.component.css']
})
export class DebitFormComponent implements OnInit {
  debitForm: FormGroup = this.formBuilder.group({
    id: [], 
    date: [Date.now],
    sum: ['',Validators.required],
    comment: ['',Validators.required],
    type: [null,Validators.required]
  });

  availableDebitType: DebitType[];
  debit: Debit;
  visible=false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private debitManagerService: DebitManagerService
  ) { }

  async ngOnInit(): Promise<void> {
    this.availableDebitType = debitTypeConst;
    console.log(this.availableDebitType);
  }

  goToDebitReport() {
    this.debit = this.debitForm.value;
    this.visible = true;
    this.debitForm.disable();
    console.log();
  }

  createDebit() {
    this.debitManagerService.create();
    this.router.navigate(['/']);
  }

  cancelDebit() {
    this.visible = false;
    this.debitForm.enable();
  }

}
