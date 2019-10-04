import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email:string
  password:string
  constructor(private authService:AuthService) {

   }
   login(){
     this.email= document.getElementById("email").nodeValue;
     this.password=document.getElementById("pass").nodeValue;
     this.authService.login(this.email,this.password)
   }
  ngOnInit() {
  }

}
