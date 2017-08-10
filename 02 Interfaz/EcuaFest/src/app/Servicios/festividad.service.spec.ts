import { TestBed, inject } from '@angular/core/testing';

import { FestividadService } from './festividad.service';

describe('FestividadService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FestividadService]
    });
  });

  it('should be created', inject([FestividadService], (service: FestividadService) => {
    expect(service).toBeTruthy();
  }));
});
