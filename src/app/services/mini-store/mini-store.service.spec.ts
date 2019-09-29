import { TestBed } from '@angular/core/testing';

import { MiniStoreService } from './mini-store.service';

describe('MiniStoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MiniStoreService = TestBed.get(MiniStoreService);
    expect(service).toBeTruthy();
  });
});
