import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPersonaListComponent } from './menu-persona-list.component';

describe('MenuPersonaListComponent', () => {
  let component: MenuPersonaListComponent;
  let fixture: ComponentFixture<MenuPersonaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuPersonaListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuPersonaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
