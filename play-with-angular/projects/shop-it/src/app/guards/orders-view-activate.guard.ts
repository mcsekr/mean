import { CanActivateFn } from '@angular/router';

export const ordersViewActivateGuard: CanActivateFn = (route, state) => {
  //window.location.href = 'http://localhost:4200/login';
  return confirm('Are you sure you want to access this page?');
};
