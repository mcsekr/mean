import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { ordersViewActivateGuard } from './orders-view-activate.guard';

describe('ordersViewActivateGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => ordersViewActivateGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
