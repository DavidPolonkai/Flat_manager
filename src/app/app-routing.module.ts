import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DebitFormComponent } from './debit/debit-form/debit-form.component';
import { OwnerFormComponent } from './owner-form/owner-form.component';
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
