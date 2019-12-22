import { TestBed } from '@angular/core/testing';

import { HandsService } from './hands.service';

describe('HandsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HandsService = TestBed.get(HandsService);
    expect(service).toBeTruthy();
  });
});
