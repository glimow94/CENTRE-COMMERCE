import { TestBed } from '@angular/core/testing';

import { SingleItemDataService } from './single-item-data.service';

describe('SingleItemDataService', () => {
  let service: SingleItemDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SingleItemDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
