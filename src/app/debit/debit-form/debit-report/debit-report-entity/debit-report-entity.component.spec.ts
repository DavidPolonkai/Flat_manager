import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebitReportEntityComponent } from './debit-report-entity.component';

describe('DebitReportEntityComponent', () => {
  let component: DebitReportEntityComponent;
  let fixture: ComponentFixture<DebitReportEntityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DebitReportEntityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DebitReportEntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
