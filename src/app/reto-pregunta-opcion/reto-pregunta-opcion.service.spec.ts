import { TestBed } from '@angular/core/testing';

import { RetoPreguntaOpcionService } from './reto-pregunta-opcion.service';

describe('RetoPreguntaOpcionService', () => {
  let service: RetoPreguntaOpcionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RetoPreguntaOpcionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
