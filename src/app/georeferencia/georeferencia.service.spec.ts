import { TestBed } from '@angular/core/testing';

import { GeoreferenciaService } from './georeferencia.service';

describe('GeoreferenciaService', () => {
  let service: GeoreferenciaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeoreferenciaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
