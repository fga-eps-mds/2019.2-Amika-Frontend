import { TestBed } from '@angular/core/testing';

import { ListaGrupoService } from './lista-grupo.service';

describe('ListaGrupoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListaGrupoService = TestBed.get(ListaGrupoService);
    expect(service).toBeTruthy();
  });
});
