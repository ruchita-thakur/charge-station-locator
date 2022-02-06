import { TestBed } from '@angular/core/testing';

import { ChargestationService } from './chargestation.service';

describe('ChargestationService', () => {
  let service: ChargestationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChargestationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
