import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoreferenciaFormComponent } from './georeferencia-form.component';

describe('GeoreferenciaFormComponent', () => {
  let component: GeoreferenciaFormComponent;
  let fixture: ComponentFixture<GeoreferenciaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeoreferenciaFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeoreferenciaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
