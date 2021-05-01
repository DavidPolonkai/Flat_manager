import { TestBed } from '@angular/core/testing';

import { DebitManagerService } from './debit-manager.service';

describe('DebitManagerService', () => {
  let service: DebitManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DebitManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
