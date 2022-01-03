import { TestBed } from '@angular/core/testing';

import { PersonneEditGuard } from './personne-edit.guard';

describe('PersonneEditGuard', () => {
  let guard: PersonneEditGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PersonneEditGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
