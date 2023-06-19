import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitarproductosComponent } from './solicitarproductos.component';

describe('SolicitarproductosComponent', () => {
  let component: SolicitarproductosComponent;
  let fixture: ComponentFixture<SolicitarproductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitarproductosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolicitarproductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
