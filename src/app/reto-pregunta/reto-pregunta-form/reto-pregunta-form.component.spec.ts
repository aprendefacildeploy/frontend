import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetoPreguntaFormComponent } from './reto-pregunta-form.component';

describe('RetoPreguntaFormComponent', () => {
  let component: RetoPreguntaFormComponent;
  let fixture: ComponentFixture<RetoPreguntaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RetoPreguntaFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RetoPreguntaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
