import { TestBed } from '@angular/core/testing';

import { UserServiseService } from './user-servise.service';

describe('UserServiseService', () => {
  let service: UserServiseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserServiseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
