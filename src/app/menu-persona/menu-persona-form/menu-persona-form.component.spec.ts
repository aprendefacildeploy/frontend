import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPersonaFormComponent } from './menu-persona-form.component';

describe('MenuPersonaFormComponent', () => {
  let component: MenuPersonaFormComponent;
  let fixture: ComponentFixture<MenuPersonaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuPersonaFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuPersonaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
