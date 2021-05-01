import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SumReportEntityComponent } from './sum-report-entity.component';

describe('ReportEntityComponent', () => {
  let component: SumReportEntityComponent;
  let fixture: ComponentFixture<SumReportEntityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SumReportEntityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SumReportEntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
