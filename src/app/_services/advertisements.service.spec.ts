import { TestBed } from '@angular/core/testing';

import { AdvertisementsService } from './advertisements.service';

describe('AdvertisementsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdvertisementsService = TestBed.get(AdvertisementsService);
    expect(service).toBeTruthy();
  });
});
