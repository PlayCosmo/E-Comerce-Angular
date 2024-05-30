import { AfterViewInit, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ApiService } from '../api.service';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit, AfterViewInit {

  constructor(public api:ApiService, public rout:Router){}

  ngOnInit(): void {
    
    this.getCartAll()
  
  
  }
  ngAfterViewInit(): void {
    this.getAllProd()

    
  }

  public cartAll:any;
  public cart:any; 
  public cartDetals!:any []

  public item:any;
  public boolean:boolean = true
  public boolean1:boolean = false

  getAllProd(){
      let cart=[]
     this.api.cartAll().subscribe((data:any)=>{
      console.log("main", data);
      
      this.cartAll = data.products
      this.cartAll.splice(0,1)
      console.log(this.cartAll);
      this.cartAll.forEach((item:any)=>{
        console.log("333", item.productId);
        
        this.api.productById(item.productId).subscribe({
          next:(data:any)=>{
           
            cart.push(data)
            console.log("cart", cart);
            this.cartDetals = cart
          }
        })
        if( this.cartAll.length > 0){
          this.boolean = false
          this.boolean1 = true
        }else{
          this.boolean = true
          this.boolean1 = false
         
        }
        this.api.cartLength.next(this.cartAll.length)
      })

     })
 
   
    
  }



  getCartAll(){
    
        this.api.cartInfo.subscribe((data:any)=>{

          this.cart = data
        

    })

  }

  clearAll(){
    this.api.clearAllCrt().subscribe()
  
  }

    public user:any
  deleteFromCart(item:any){
    console.log("delete", item);
    
    this.api.deleteFromCrt({
      "id": item._id
    }).subscribe((data:any)=>{ 
    console.log(data);
    })
  }

  checkout(){
    this.api.checkOut({}).subscribe({
      next:(data:any)=>{
        console.log(data);
       
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: data.message,
          showConfirmButton: false,
          timer: 5000
        });
 
      },
      error:()=>{
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Product_stock_sold_before_checkout",
          
        });
      }
    })
  
    this.rout.navigate(["/"])
  }

 
  getCart(){
    console.log("123");
    

    
  }

  detailInfo(id: any) {
    this.api.sendId.next(id)
  
    this.rout.navigate(["/details"])
  
   }

}
