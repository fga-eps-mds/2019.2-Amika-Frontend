import { TestBed } from '@angular/core/testing';

import { RequisicaoService } from './requisicao.service';

describe('RequisicaoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RequisicaoService = TestBed.get(RequisicaoService);
    expect(service).toBeTruthy();
  });
});
