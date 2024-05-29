import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  constructor(public rout:Router, public http:ApiService){}
  ngOnInit(): void {

  }

  public email:any;
  public password:any;

  public allAuth:any
  public token:any
  public loggedUser:any
signIn() {


      this.http.signIn({
        "email": this.email,
        "password": this.password
      }).subscribe((data:any)=>{
   
        this.token = data
        localStorage.setItem("tokens", this.token)
       localStorage.setItem("myTok", this.token.access_token)
       localStorage.setItem("myTok1", this.token.refresh_token)
       this.rout.navigate(["/personal"])
       this.http.refreshTok().subscribe()
      })
  
  }


}


