import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetoPreguntaOpcionListComponent } from './reto-pregunta-opcion-list.component';

describe('RetoPreguntaOpcionListComponent', () => {
  let component: RetoPreguntaOpcionListComponent;
  let fixture: ComponentFixture<RetoPreguntaOpcionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RetoPreguntaOpcionListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RetoPreguntaOpcionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
