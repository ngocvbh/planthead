import { TestBed } from '@angular/core/testing';

import { PlantIdentifierService } from './plant-identifier.service';

describe('PlantIdentifierService', () => {
  let service: PlantIdentifierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlantIdentifierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
