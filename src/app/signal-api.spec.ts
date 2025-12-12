import { TestBed } from '@angular/core/testing';

import { SignalApi } from './signal-api';

describe('SignalApi', () => {
  let service: SignalApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignalApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
