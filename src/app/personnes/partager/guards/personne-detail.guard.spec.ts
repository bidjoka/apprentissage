import { TestBed } from '@angular/core/testing';

import { PersonneDetailGuard } from './personne-detail.guard';

describe('PersonneDetailGuard', () => {
  let guard: PersonneDetailGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PersonneDetailGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
