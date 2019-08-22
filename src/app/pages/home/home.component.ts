import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {logout} from '../login/login.component'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(
    private router: Router,
  ){}

  logout(){
    logout().then(() => this.router.navigate(['login']));
  }
}
