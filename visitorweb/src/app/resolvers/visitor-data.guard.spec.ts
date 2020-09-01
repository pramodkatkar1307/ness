import { TestBed } from '@angular/core/testing';

import { VisitorDataGuard } from './visitor-data.guard';

describe('VisitorDataGuard', () => {
  let guard: VisitorDataGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(VisitorDataGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
