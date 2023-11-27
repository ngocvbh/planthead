import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantIdentifierComponent } from './plant-identifier.component';

describe('PlantIdentifierComponent', () => {
  let component: PlantIdentifierComponent;
  let fixture: ComponentFixture<PlantIdentifierComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlantIdentifierComponent]
    });
    fixture = TestBed.createComponent(PlantIdentifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
