import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Owner } from 'src/app/model/Owner';
import { OwnerService } from 'src/app/service/owner.service';
import { DepositManagerService } from '../../service/deposit-manager.service';

@Component({
  selector: 'app-owner-deposit-form',
  templateUrl: './owner-deposit-form.component.html',
  styleUrls: ['./owner-deposit-form.component.css']
})
export class OwnerDepositFormComponent implements OnInit {
  ownerDepositForm: FormGroup = this.formBuilder.group({
    id: [],
    owner: [Validators.required],
    currentBalance: {value: 0, disabled: true},
    deposit: [0, [Validators.required, Validators.min(0)]],
    newBalance: {value: 0, disabled: true}
  });
  ownerList: Owner[];

  constructor(
    private formBuilder: FormBuilder,
    private ownerService: OwnerService,
    private depositManagerService: DepositManagerService,
    private router: Router,
  ) { }

  async ngOnInit(): Promise<void> {
    this.ownerList = await this.ownerService.getAllOwner();
  }

  fillCurrentBalance() {
    const owner = this.ownerDepositForm.get('owner').value;
    this.ownerDepositForm.patchValue({ currentBalance : owner.balance });
  }

  async deposit() {
    const formValue = this.ownerDepositForm.value;
    await this.depositManagerService.addDebit(formValue.owner, formValue.deposit);

  }

  updateCalculatedBalance() {
    const formValue = this.ownerDepositForm.value;
    const newBalance = formValue.owner.balance  + formValue.deposit;
    this.ownerDepositForm.patchValue({ newBalance: newBalance});
  }
}
