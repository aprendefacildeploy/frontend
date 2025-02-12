import { TestBed } from '@angular/core/testing';

import { TipoRetoService } from './tipo-reto.service';

describe('TipoRetoService', () => {
  let service: TipoRetoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoRetoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
