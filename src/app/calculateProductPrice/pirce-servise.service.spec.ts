import { TestBed } from '@angular/core/testing';

import { PirceServiseService } from './pirce-servise.service';

describe('PirceServiseService', () => {
  let service: PirceServiseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PirceServiseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
