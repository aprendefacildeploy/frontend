import { TestBed } from '@angular/core/testing';

import { MenuPersonaService } from './menu-persona.service';

describe('MenuPersonaService', () => {
  let service: MenuPersonaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuPersonaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
