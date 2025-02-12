import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaUnidadFormComponent } from './persona-unidad-form.component';

describe('PersonaUnidadFormComponent', () => {
  let component: PersonaUnidadFormComponent;
  let fixture: ComponentFixture<PersonaUnidadFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonaUnidadFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonaUnidadFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
