import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {


  constructor( public http:ApiService){}
  ngOnInit(): void {

  }


  public signUpForm:FormGroup = new FormGroup({

    firstName: new FormControl("", Validators.required),
    lastName: new FormControl("", Validators.required),
    age: new FormControl("", Validators.required),
    email: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required),
    address: new FormControl("", Validators.required),
    phone: new FormControl("", Validators.required),
    zipcode: new FormControl("", Validators.required),
    avatar: new FormControl("", Validators.required),
    gender: new FormControl("", Validators.required),
   
  })


  signUp() {
      this.http.signUp({
        "firstName": this.signUpForm.get("firstName")?.value,
        "lastName": this.signUpForm.get("lastName")?.value,
        "age": this.signUpForm.get("age")?.value,
        "email": this.signUpForm.get("email")?.value,
        "password": this.signUpForm.get("password")?.value,
        "address": this.signUpForm.get("address")?.value,
        "phone":this.signUpForm.get("phone")?.value,
        "zipcode": this.signUpForm.get("zipcode")?.value,
        "avatar": this.signUpForm.get("avatar")?.value,
        "gender": this.signUpForm.get("gender")?.value,
      }).subscribe((data:any)=>{
        data
        
      })
      
  
    }
    
}
