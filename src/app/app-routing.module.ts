import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DebitFormComponent } from './debit/debit-form/debit-form.component';
import { OwnerDepositFormComponent } from './owner/owner-deposit-form/owner-deposit-form.component';
import { OwnerFormComponent } from './owner/owner-form/owner-form.component';
import { ReportFormComponent } from './report-form/report-form.component';

const routes: Routes = [
  {
    path: 'owner-form',
    component: OwnerFormComponent
  },
  {
    path: 'debit-form',
    component: DebitFormComponent
  },
  {
    path: 'report-form',
    component: ReportFormComponent
  },
  {
    path: 'owner-deposit-form',
    component: OwnerDepositFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
