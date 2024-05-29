import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-personal-space',
  templateUrl: './personal-space.component.html',
  styleUrl: './personal-space.component.css'
})
export class PersonalSpaceComponent implements OnInit, AfterViewInit{

  constructor(public http:ApiService, public rout:Router){}
  ngOnInit(): void {

  }
  ngAfterViewInit(): void {
      this.getUserInfo()
  }

  public newtoken:any
  public emailVer:any;
  verify(){
    this.http.refreshTok().subscribe((data:any)=>{
      this.newtoken = data
  
      
    })
}

public userInfo:any

  getUserInfo(){
    this.http.auth().subscribe((data:any)=>{
      this.userInfo = data
   
      this.http.user.next(data)
    })
  }




  public newForm:FormGroup = new FormGroup({
    email: new FormControl('', Validators.required)
  })

  verificationEmail() {
    this.http.verifyEmail({
      "email": this.newForm.get("email")?.value
    }).subscribe((data:any)=>{
      data
      
    })
  }


  public newForm1:FormGroup = new FormGroup({
    email: new FormControl('', Validators.required)
  })


  emailRecovery() {
    this.http.emailRecovery({
      "email": this.newForm1.get("email")?.value
    }).subscribe((data:any)=>{
    data
      
    })
  }


  public newForm2:FormGroup = new FormGroup({
    oldPassword: new FormControl('', Validators.required),
    newPassword: new FormControl('', Validators.required),
  })

  changePassword() {
    this.http.changePassword({
      "oldPassword": this.newForm2.get("oldPassword")?.value,
      "newPassword": this.newForm2.get("newPassword")?.value
    }).subscribe((data:any)=>{
     data
    })
  }
  
  public newForm3:FormGroup = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    age: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    zipcode: new FormControl('', Validators.required),
    avatar: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
  })
  updateInfo(){
    this.http.updatePersonalInfo({
      "firstName": this.newForm3.get("firstName")?.value,
      "lastName": this.newForm3.get("lastName")?.value,
      "age": this.newForm3.get("age")?.value,
      "address": this.newForm3.get("address")?.value,
      "phone": this.newForm3.get("phone")?.value,
      "zipcode": this.newForm3.get("zipcode")?.value,
      "avatar": this.newForm3.get("avatar")?.value,
      "gender": this.newForm3.get("gender")?.value
    }).subscribe(()=>{
        this.quit()
      
    })
  }



  public newForm4:FormGroup = new FormGroup({
    title: new FormControl('', Validators.required),
    brand: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    stock: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    images: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
    warranty: new FormControl('', Validators.required),
    issueDate: new FormControl('', Validators.required),
    thumbnail: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
  })

  addProduct(){
    this.http.addProducts({
      "title": this.newForm4.get("title")?.value,
      "brand": this.newForm4.get("brand")?.value,
      "price": this.newForm4.get("price")?.value,
      "stock": this.newForm4.get("stock")?.value,
      "images": this.newForm4.get("images")?.value,
      "category": this.newForm4.get("category")?.value,
      "warranty": this.newForm4.get("warranty")?.value,
      "issueDate": this.newForm4.get("issueDate")?.value,
      "thumbnail": this.newForm4.get("thumbnail")?.value,
      "description": this.newForm4.get("description")?.value,
    }).subscribe((data:any)=>{
    data
      
    })
  }

  quit() {
      localStorage.clear()
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
        title: "Signed Out successfully"
      });
      this.rout.navigate(["/login"])
  }
  currentForm!: string;

switchForm(form: string) {
  this.currentForm = form;
}
  
  }

