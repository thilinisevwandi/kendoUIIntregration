import { TestBed } from '@angular/core/testing';

import { SovServiceService } from './sov-service.service';

describe('SovServiceService', () => {
  let service: SovServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SovServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
