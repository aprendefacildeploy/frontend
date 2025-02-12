import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaUnidadListComponent } from './persona-unidad-list.component';

describe('PersonaUnidadListComponent', () => {
  let component: PersonaUnidadListComponent;
  let fixture: ComponentFixture<PersonaUnidadListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonaUnidadListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonaUnidadListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
