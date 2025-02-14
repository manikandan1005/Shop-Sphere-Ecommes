import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { routes } from '../app.routes';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  userName:string='';
  password:string='';

  constructor(private router:Router){}

  login(){
    if(this.userName=="admin" && this.password=="1"){
      console.log("login success")
      this.router.navigate(['home'])
    }
    else{
      alert("please enter correct username")
      console.log("login fail")
    }

  }

}
