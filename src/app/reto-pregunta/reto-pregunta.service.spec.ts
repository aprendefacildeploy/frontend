import { TestBed } from '@angular/core/testing';

import { RetoPreguntaService } from './reto-pregunta.service';

describe('RetoPreguntaService', () => {
  let service: RetoPreguntaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RetoPreguntaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
