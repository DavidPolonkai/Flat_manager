import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportSumComponent } from './sum-report.component';

describe('ReportSumComponent', () => {
  let component: ReportSumComponent;
  let fixture: ComponentFixture<ReportSumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportSumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportSumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
