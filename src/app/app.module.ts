import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OwnerFormComponent } from './owner-form/owner-form.component';
import { DebitFormComponent } from './debit/debit-form/debit-form.component';
import { ReportFormComponent } from './report-form/report-form.component';
import { DebitReportComponent } from './debit/debit-form/debit-report/debit-report.component';
import { DebitReportEntityComponent } from './debit/debit-form/debit-report/debit-report-entity/debit-report-entity.component';

@NgModule({
  declarations: [
    AppComponent,
    OwnerFormComponent,
    DebitFormComponent,
    ReportFormComponent,
    DebitReportComponent,
    DebitReportEntityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
