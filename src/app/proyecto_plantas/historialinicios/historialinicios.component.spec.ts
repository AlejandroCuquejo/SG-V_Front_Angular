import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialiniciosComponent } from './historialinicios.component';

describe('HistorialiniciosComponent', () => {
  let component: HistorialiniciosComponent;
  let fixture: ComponentFixture<HistorialiniciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistorialiniciosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistorialiniciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
