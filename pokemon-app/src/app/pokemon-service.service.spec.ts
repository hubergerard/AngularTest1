import { TestBed } from '@angular/core/testing';

import { PokemonService } from './pokemon-service.service';

describe('PokemonServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PokemonService = TestBed.get(PokemonService);
    expect(service).toBeTruthy();
  });
});
