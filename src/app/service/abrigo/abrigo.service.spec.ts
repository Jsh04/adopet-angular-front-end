import { TestBed } from '@angular/core/testing';

import { AbrigoService } from './abrigo.service';

describe('AbrigoService', () => {
  let service: AbrigoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AbrigoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
