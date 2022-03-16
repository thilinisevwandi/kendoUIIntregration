import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SovItemGridComponent } from './sov-item-grid.component';

describe('SovItemGridComponent', () => {
  let component: SovItemGridComponent;
  let fixture: ComponentFixture<SovItemGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SovItemGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SovItemGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
