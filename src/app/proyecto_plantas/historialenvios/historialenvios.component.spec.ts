import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialenviosComponent } from './historialenvios.component';

describe('HistorialenviosComponent', () => {
  let component: HistorialenviosComponent;
  let fixture: ComponentFixture<HistorialenviosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistorialenviosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistorialenviosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
