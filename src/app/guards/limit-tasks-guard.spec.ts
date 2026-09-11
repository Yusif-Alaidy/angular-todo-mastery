import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { limitTasksGuard } from './limit-tasks-guard';

describe('limitTasksGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => limitTasksGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
