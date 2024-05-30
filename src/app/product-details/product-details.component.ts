import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { StarRatingComponent } from '../star-rating/star-rating.component';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit, OnChanges {

constructor(public api:ApiService, public rout:ActivatedRoute, private dialog: MatDialog, public router:Router){}
  ngOnInit(): void {
  this.getIdFromitem()
    this.getDetails()
    this.takeInfo()
  }
  ngOnChanges(changes: SimpleChanges): void {

  }

  public getid:any;
  public getDetailInformation:any
  public name!:string;
  public surname!:string;
  public rating!:number;
  public cart:any;

  getIdFromitem(){
    this.api.sendId.subscribe((data:any)=>{
      this.getid = data
    })
  }
  
  getDetails(){
    this.api.getDetailInfo(this.getid).subscribe((data:any)=>{
      this.getDetailInformation = data    
    })
  }



  openEvaluateModal(): void {
    const dialogRef = this.dialog.open(StarRatingComponent, {
      width: '400px',
      disableClose: true // To prevent closing on clicking outside or pressing escape
    });
  }



  takeInfo(){
    this.api.name.subscribe((data:any)=>{
      this.name = data
    })
    this.api.surname.subscribe((data:any)=>{
      this.surname = data
    })
    this.api.ratings.subscribe((data:any)=>{
      this.rating = data
    })
  }

  postProduct(item:any) {
  
    this.api.patchCart({
      "id": item._id,
      "quantity": 1
    }).subscribe({
      next:(data:any)=>{
        this.cart = data
        this.router.navigate(["/cart"])
      },
      error:(error)=>{
  
        
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "You Have To Create Cart First!",
        });
      }
    })
  }
  
}
