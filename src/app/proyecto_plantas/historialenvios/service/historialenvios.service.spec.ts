import { TestBed } from '@angular/core/testing';

import { HistorialenviosService } from './historialenvios.service';

describe('HistorialenviosService', () => {
  let service: HistorialenviosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistorialenviosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
