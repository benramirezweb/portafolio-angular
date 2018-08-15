import { TestBed, inject } from '@angular/core/testing';

import { JsonLocalService } from './json-local.service';

describe('JsonLocalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JsonLocalService]
    });
  });

  it('should be created', inject([JsonLocalService], (service: JsonLocalService) => {
    expect(service).toBeTruthy();
  }));
});
