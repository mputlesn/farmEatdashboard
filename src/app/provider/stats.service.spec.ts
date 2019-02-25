import { TestBed, inject } from '@angular/core/testing';

import { Provider\statsService } from './provider\stats.service';

describe('Provider\statsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Provider\statsService]
    });
  });

  it('should be created', inject([Provider\statsService], (service: Provider\statsService) => {
    expect(service).toBeTruthy();
  }));
});
