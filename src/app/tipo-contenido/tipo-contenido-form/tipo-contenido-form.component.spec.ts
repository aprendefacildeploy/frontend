import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoContenidoFormComponent } from './tipo-contenido-form.component';

describe('TipoContenidoFormComponent', () => {
  let component: TipoContenidoFormComponent;
  let fixture: ComponentFixture<TipoContenidoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TipoContenidoFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipoContenidoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
