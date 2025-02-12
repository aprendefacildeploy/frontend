import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoreferenciaListComponent } from './georeferencia-list.component';

describe('GeoreferenciaListComponent', () => {
  let component: GeoreferenciaListComponent;
  let fixture: ComponentFixture<GeoreferenciaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeoreferenciaListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeoreferenciaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
