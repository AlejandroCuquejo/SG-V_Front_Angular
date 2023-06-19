import { TestBed } from '@angular/core/testing';

import { SolicitarproductosService } from './solicitarproductos.service';

describe('SolicitarproductosService', () => {
  let service: SolicitarproductosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SolicitarproductosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
