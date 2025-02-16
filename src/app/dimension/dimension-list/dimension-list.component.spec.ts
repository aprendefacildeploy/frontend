import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DimensionListComponent } from './dimension-list.component';

describe('DimensionListComponent', () => {
  let component: DimensionListComponent;
  let fixture: ComponentFixture<DimensionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DimensionListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DimensionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
