import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetoFormComponent } from './reto-form.component';

describe('RetoFormComponent', () => {
  let component: RetoFormComponent;
  let fixture: ComponentFixture<RetoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RetoFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RetoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
