import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetoPreguntaListComponent } from './reto-pregunta-list.component';

describe('RetoPreguntaListComponent', () => {
  let component: RetoPreguntaListComponent;
  let fixture: ComponentFixture<RetoPreguntaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RetoPreguntaListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RetoPreguntaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
