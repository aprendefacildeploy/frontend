import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoListComponent } from './contenido-list.component';

describe('ContenidoListComponent', () => {
  let component: ContenidoListComponent;
  let fixture: ComponentFixture<ContenidoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContenidoListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContenidoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
