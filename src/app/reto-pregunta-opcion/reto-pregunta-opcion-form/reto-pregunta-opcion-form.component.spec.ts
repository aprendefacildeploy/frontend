import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetoPreguntaOpcionFormComponent } from './reto-pregunta-opcion-form.component';

describe('RetoPreguntaOpcionFormComponent', () => {
  let component: RetoPreguntaOpcionFormComponent;
  let fixture: ComponentFixture<RetoPreguntaOpcionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RetoPreguntaOpcionFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RetoPreguntaOpcionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
