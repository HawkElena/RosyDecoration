import { TestBed } from '@angular/core/testing';

import { SiderstateService } from './siderstate.service';

describe('SiderstateService', () => {
  let service: SiderstateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SiderstateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
