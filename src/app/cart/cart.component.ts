import { AfterViewInit, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit, AfterViewInit {

  constructor(public api:ApiService){}

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

  getAllProd(){
      let cart=[]
     this.api.cartAll().subscribe((data:any)=>{
      console.log("main", data);
      
      this.cartAll = data.products
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
      })
    
      this.cartdetalslength = this.cartDetals.length
      console.log(this.cartdetalslength);
      
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
      
   
      
    })

  }

  public cartdetalslength!:number;
  getCart(){
    console.log("123");
    

    
  }

}
