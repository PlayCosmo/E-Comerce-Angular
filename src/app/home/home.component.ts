import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{




  constructor(public api:ApiService, public rout:Router){}
  ngOnInit(): void {
    // this.getAllProd()
    this.getInfo()
    this.getBrandInfo()
    this.getPriceInfo()
    this.getRatingInfo()
    this.getall()
  }

  public allItems:any

//  getAllProd(){
//   this.api.getAllProducts().subscribe((data:any)=>{
//   this.allItems = data
//   })
//  }
 detailInfo(id: any) {
  this.api.sendId.next(id)

  this.rout.navigate(["/details"])

 }

 public inputValue:any = ""

findByTitle(){
    this.api.keyword(this.inputValue).subscribe((data:any)=>{
      this.allItems=data
      this.inputValue=''
    })
 }

public saveInfo:any;
getInfo(){
  this.api.categoryInfo.subscribe((data:any)=>{
    this.saveInfo=data
  
    this.api.filterByCategories(this.saveInfo).subscribe((data:any)=>{
      this.allItems=data
  })
})}
reset() {
  this.getall()
}

public brandInfo:any;
getBrandInfo(){
  this.api.brandInfo.subscribe((data:any)=>{
    this.brandInfo = data
  
    
    this.api.brand(this.brandInfo).subscribe((data:any)=>{ 
      this.allItems = data
  })
  })
}

public minPriceInfo:any = 0
public maxPriceInfo:any = 0
getPriceInfo(){
  this.api.minInfo.subscribe((data:any)=>{
    this.minPriceInfo = data
  })
  this.api.maxInfo.subscribe((data:any)=>{
    this.maxPriceInfo = data
  
  this.api.price(Number(this.minPriceInfo), Number(this.maxPriceInfo)).subscribe((data:any)=>{
    this.allItems = data 
  })
  })
}

public ratingInfo:any;
getRatingInfo(){
  this.api.ratingInfo.subscribe((data:any)=>{
    this.ratingInfo= data
    this.api.rating(this.ratingInfo).subscribe((data:any)=>{
      this.allItems = data
  
    })
  })
}






public index:any = 1
public size:any = 6
OnPageChange(event:PageEvent) {
  
  this.size = event.pageSize 

  
  this.index= event.pageIndex + 1

  this.api.paginator(this.index, event.pageSize).subscribe((data:any)=>{
    this.allItems =''
    this.allItems = data
    
  })

  }


 getall(){
  this.api.paginator(this.index, this.size).subscribe((data:any)=>{
    this.allItems =''
    this.allItems = data
  
    
    
  })
 }
 public userId:any
 public cart:any

 postProduct(item:any) {

  this.api.postCart({
    "id": item._id,
    "quantity": 1
  }).subscribe((data:any)=>{
    console.log(data);
 
  })
  this.api.patchCart({
    "id": item._id,
    "quantity": 1
  }).subscribe((data:any)=>{
    // console.log(data);
     this.cart = data
     this.rout.navigate(["/cart"])
  }) 
 
 }

}
