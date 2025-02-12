import { TestBed } from '@angular/core/testing';

import { PersonaUnidadService } from './persona-unidad.service';

describe('PersonaUnidadService', () => {
  let service: PersonaUnidadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonaUnidadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
