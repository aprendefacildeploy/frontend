import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoRetoListComponent } from './tipo-reto-list.component';

describe('TipoRetoListComponent', () => {
  let component: TipoRetoListComponent;
  let fixture: ComponentFixture<TipoRetoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TipoRetoListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipoRetoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
