import { CanActivateFn } from '@angular/router';

export const cartGuard: CanActivateFn = (route, state) => {
  let myToken: string | null = null;

  // Check if localStorage is available
  if (typeof localStorage !== 'undefined') {
    myToken = localStorage.getItem("myTok");
  }
  if(myToken){
    return true}
    else
    {
      return false
    }
};
