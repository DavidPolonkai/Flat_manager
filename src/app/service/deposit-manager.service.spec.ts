import { TestBed } from '@angular/core/testing';

import { DepositManagerService } from './deposit-manager.service';

describe('DepositManagerService', () => {
  let service: DepositManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DepositManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
