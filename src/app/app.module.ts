import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OwnerFormComponent } from './owner/owner-form/owner-form.component';
import { DebitFormComponent } from './debit/debit-form/debit-form.component';
import { ReportFormComponent } from './reports/report-form/report-form.component';
import { DebitReportComponent } from './debit/debit-form/debit-report/debit-report.component';
import { DebitReportEntityComponent } from './debit/debit-form/debit-report/debit-report-entity/debit-report-entity.component';
import { LogReportComponent } from './reports/report-form/log-report/log-report.component';
import { LogReportEntityComponent } from './reports/report-form/log-report/log-report-entity/log-report-entity.component';
import { OwnerDepositFormComponent } from './owner/owner-deposit-form/owner-deposit-form.component';
import { ReportSumComponent } from './reports/report-form/sum-report/sum-report.component';
import { SumReportEntityComponent } from './reports/report-form/sum-report/sum-report-entity/sum-report-entity.component';

@NgModule({
  declarations: [
    AppComponent,
    OwnerFormComponent,
    DebitFormComponent,
    ReportFormComponent,
    DebitReportComponent,
    DebitReportEntityComponent,
    LogReportComponent,
    LogReportEntityComponent,
    SumReportEntityComponent,
    OwnerDepositFormComponent,
    ReportSumComponent
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
