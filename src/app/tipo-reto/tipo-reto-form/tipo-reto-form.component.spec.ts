import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoRetoFormComponent } from './tipo-reto-form.component';

describe('TipoRetoFormComponent', () => {
  let component: TipoRetoFormComponent;
  let fixture: ComponentFixture<TipoRetoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TipoRetoFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipoRetoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
