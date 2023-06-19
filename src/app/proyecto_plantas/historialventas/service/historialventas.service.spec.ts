import { TestBed } from '@angular/core/testing';

import { HistorialventasService } from './historialventas.service';

describe('HistorialventasService', () => {
  let service: HistorialventasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistorialventasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
