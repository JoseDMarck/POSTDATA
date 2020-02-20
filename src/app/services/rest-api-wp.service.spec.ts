import { TestBed } from '@angular/core/testing';

import { RestApiWpService } from './rest-api-wp.service';

describe('RestApiWpService', () => {
  let service: RestApiWpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestApiWpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
