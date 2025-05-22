import { TestBed } from '@angular/core/testing';

import { DestinationGuideService } from './destination-guide.service';

describe('DestinationGuideService', () => {
  let service: DestinationGuideService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DestinationGuideService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
