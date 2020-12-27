import { TestBed } from '@angular/core/testing';

import { BirthBySleepService } from './birth-by-sleep.service';

describe('BirthBySleepService', () => {
  let service: BirthBySleepService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BirthBySleepService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
