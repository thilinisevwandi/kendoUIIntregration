import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SovItemDescriptionComponent } from './sov-item-description.component';

describe('SovItemDescriptionComponent', () => {
  let component: SovItemDescriptionComponent;
  let fixture: ComponentFixture<SovItemDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SovItemDescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SovItemDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
