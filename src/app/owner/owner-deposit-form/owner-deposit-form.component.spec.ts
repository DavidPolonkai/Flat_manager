import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerDepositFormComponent } from './owner-deposit-form.component';

describe('OwnerDepositFormComponent', () => {
  let component: OwnerDepositFormComponent;
  let fixture: ComponentFixture<OwnerDepositFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnerDepositFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerDepositFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
