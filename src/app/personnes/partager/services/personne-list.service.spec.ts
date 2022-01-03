import { TestBed } from '@angular/core/testing';

import { PersonneListService } from './personne-list.service';

describe('PersonneListService', () => {
  let service: PersonneListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonneListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
