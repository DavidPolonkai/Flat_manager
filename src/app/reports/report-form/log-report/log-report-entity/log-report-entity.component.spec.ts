import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogReportEntityComponent } from './log-report-entity.component';

describe('ReportEntityComponent', () => {
  let component: LogReportEntityComponent;
  let fixture: ComponentFixture<LogReportEntityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogReportEntityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogReportEntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
