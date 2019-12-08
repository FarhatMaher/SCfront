import { TestBed } from '@angular/core/testing';

import { ORCService } from './orc.service';

describe('ORCService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ORCService = TestBed.get(ORCService);
    expect(service).toBeTruthy();
  });
});
