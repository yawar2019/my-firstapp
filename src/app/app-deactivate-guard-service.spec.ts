import { TestBed } from '@angular/core/testing';

import { AppDeactivateGuardService } from './app-deactivate-guard-service';

describe('AppDeactivateGuardService', () => {
  let service: AppDeactivateGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppDeactivateGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
