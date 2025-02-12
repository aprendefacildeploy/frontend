import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetoListComponent } from './reto-list.component';

describe('RetoListComponent', () => {
  let component: RetoListComponent;
  let fixture: ComponentFixture<RetoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RetoListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RetoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
