import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router: Router,
  ) { }

  isAuthenticated(): boolean {
       let user = localStorage.getItem('token');
       if(!user){
          return false;
       }
          return true;
  }

}
