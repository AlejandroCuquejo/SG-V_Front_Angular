import { TestBed } from '@angular/core/testing';

import { HistorialiniciosService } from './historialinicios.service';

describe('HistorialiniciosService', () => {
  let service: HistorialiniciosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistorialiniciosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
