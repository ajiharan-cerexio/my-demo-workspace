import { TestBed } from '@angular/core/testing';

import { NxDemoService } from './nx-demo.service';

describe('NxDemoService', () => {
  let service: NxDemoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NxDemoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
