import { TestBed } from '@angular/core/testing';

import { RestaurantRepositoryService } from './restaurant-repository.service';

describe('RestaurantRepositoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RestaurantRepositoryService = TestBed.get(RestaurantRepositoryService);
    expect(service).toBeTruthy();
  });
});
