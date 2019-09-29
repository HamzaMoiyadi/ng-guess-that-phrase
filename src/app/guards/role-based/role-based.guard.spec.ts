import { TestBed, async, inject } from '@angular/core/testing';

import { RoleBasedGuard } from './role-based.guard';

describe('RoleBasedGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RoleBasedGuard]
    });
  });

  it('should ...', inject([RoleBasedGuard], (guard: RoleBasedGuard) => {
    expect(guard).toBeTruthy();
  }));
});
