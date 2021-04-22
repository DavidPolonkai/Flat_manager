import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DebitFormComponent } from './debit/debit-form/debit-form.component';
import { OwnerFormComponent } from './owner-form/owner-form.component';

const routes: Routes = [
  {
    path: 'owner-form',
    component: OwnerFormComponent
  },
  {
    path: 'debit-form',
    component: DebitFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
