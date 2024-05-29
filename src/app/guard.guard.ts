import { CanActivateFn } from '@angular/router';
import Swal from 'sweetalert2'

export const guardGuard: CanActivateFn = (route, state) => {

  let myToken: string | null = null;

  // Check if localStorage is available
  if (typeof localStorage !== 'undefined') {
    myToken = localStorage.getItem("myTok");
  }
  if(myToken){
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });
    Toast.fire({
      icon: "success",
      title: "Signed in successfully"
    });
    return true;
  }else{
    return false;
  }

};
