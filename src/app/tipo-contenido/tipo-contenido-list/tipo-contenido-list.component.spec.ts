import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoContenidoListComponent } from './tipo-contenido-list.component';

describe('TipoContenidoListComponent', () => {
  let component: TipoContenidoListComponent;
  let fixture: ComponentFixture<TipoContenidoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TipoContenidoListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipoContenidoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
