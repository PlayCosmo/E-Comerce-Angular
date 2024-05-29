import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http:HttpClient) { }

  public sendId:BehaviorSubject<any> = new BehaviorSubject({})
  public sendvalue:BehaviorSubject<any> = new BehaviorSubject({})
  public categoryInfo:Subject<any> = new Subject()
  public brandInfo:Subject<any> = new Subject()
  public minInfo:Subject<any> = new Subject()
  public maxInfo:Subject<any> = new Subject()
  public ratingInfo:Subject<any> = new Subject()
  public tokenInfo:Subject<any> = new Subject()
  public user:Subject<any> = new Subject()
  public cartInfo:BehaviorSubject<any> = new BehaviorSubject({})
  
  public name:Subject<any> = new Subject()
  public surname:Subject<any> = new Subject()
  public ratings:Subject<any> = new Subject()

  public tokenToGuard:Subject<any> = new Subject()


  getAllProducts(){
    return this.http.get("https://api.everrest.educata.dev/shop/products/all?page_index=1&page_size=50")
  }
  
  getDetailInfo(id:any){
  return this.http.get(`https://api.everrest.educata.dev/shop/products/id/${id}`)
  }

  brand(brand:any){
    return this.http.get(`https://api.everrest.educata.dev/shop/products/search?brand=${brand}`)
  }

  filterByCategories(id:any){
    return this.http.get(`https://api.everrest.educata.dev/shop/products/category/${id}`)
  }
  price(min:any, max:any){
    return this.http.get(`https://api.everrest.educata.dev/shop/products/search?price_min=${min}&price_max=${max}`)
  }
  rating(rating:any){
    return this.http.get(`https://api.everrest.educata.dev/shop/products/search?rating=${rating}`)
  }
  keyword(keyword:any){
    return this.http.get(`https://api.everrest.educata.dev/shop/products/search?keywords=${keyword}`)
  }

  paginator(index:any, size:any){
    return this.http.get(`https://api.everrest.educata.dev/shop/products/all?page_index=${index}&page_size=${size}`)
  }


cartAll(){
  return this.http.get("https://api.everrest.educata.dev/shop/cart")
}


authAll(){
  return this.http.get("https://api.everrest.educata.dev/auth")
}

signUp(body:any){
  return this.http.post("https://api.everrest.educata.dev/auth/sign_up", body)
}
verifyEmail(body:any){
  return this.http.post("https://api.everrest.educata.dev/auth/verify_email", body)
}
signIn(body:any){
  return this.http.post("https://api.everrest.educata.dev/auth/sign_in", body)
}

auth(){
  return this.http.get("https://api.everrest.educata.dev/auth") 
}

refreshTok(){
 return this.http.get("https://api.everrest.educata.dev/auth/refresh")
}

emailRecovery(body:any){
  return this.http.post("https://api.everrest.educata.dev/auth/recovery", body)
}

changePassword(body:any){
  return this.http.patch("https://api.everrest.educata.dev/auth/change_password", body)
}
updatePersonalInfo(body:any){
  return this.http.patch("https://api.everrest.educata.dev/auth/update", body)
}

addProducts(body:any){
  return this.http.post("https://api.everrest.educata.dev/shop/products", body)
}


postCart(body:any){
  return this.http.post("https://api.everrest.educata.dev/shop/cart/product", body)
}
patchCart(body:any){
  return this.http.patch("https://api.everrest.educata.dev/shop/cart/product", body)
}
productById(body:any){
  return this.http.get(`https://api.everrest.educata.dev/shop/products/id/${body}`)
}
clearAllCrt(){
  return this.http.delete("https://api.everrest.educata.dev/shop/cart")
}
deleteFromCrt(body:any){
  return this.http.delete("https://api.everrest.educata.dev/shop/cart/product", body)
}
}


