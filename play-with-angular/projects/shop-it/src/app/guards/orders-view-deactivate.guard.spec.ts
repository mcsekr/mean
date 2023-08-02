import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { ordersViewDeactivateGuard } from './orders-view-deactivate.guard';

describe('ordersViewDeactivateGuard', () => {
  const executeGuard: CanDeactivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => ordersViewDeactivateGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
