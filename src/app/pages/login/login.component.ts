import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(
    private router: Router,

  ){}

  edited = true;
  user : any = [];
  msj : string;
  
  registerUser (){
    this.edited = false;
  }

  cancel (){
    this.edited = true;
  }

  onClickSubmit (formData){
    if(formData.register){
      if(localStorage.getItem('userList') == null){
        this.user.push(formData.register);
        this.user = JSON.stringify(this.user);
        localStorage.setItem('userList', this.user)
        this.cancel();
      }else{
        this.user = JSON.parse(localStorage.getItem('userList'));
        this.user.push(formData.register);
        this.user = JSON.stringify(this.user);
        localStorage.setItem('userList', this.user)
        this.cancel();
      }
    }else if(formData.user){
       this.user = JSON.parse(localStorage.getItem('userList'));
       if(this.user.find(e => e === formData.user) ){
          localStorage.setItem("token", '653iehyugfyu3gfhiuyf');
          this.router.navigate(['home']);
       }else{
          this.msj = "Usuario no encontrado";
       }
    }
  }
}

export const logout = async () => {
 await localStorage.removeItem("token");
}
