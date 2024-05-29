import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-filter-sidebar',
  templateUrl: './filter-sidebar.component.html',
  styleUrl: './filter-sidebar.component.css'
})
export class FilterSidebarComponent implements OnInit {



  constructor(public http:ApiService){}
  ngOnInit(): void {

  }

  public categories:any = ""
  public brands:any =""
  public minPrice:any;
  public maxPrice:any;
  public rating:any;

  categoryInfo() {
    if(this.categories == "laptops"){
      this.categories = 1
    }else if(this.categories == "phones"){
      this.categories = 2
    }
    this.http.categoryInfo.next(this.categories)
    this.categories = ''
  }

brandInfo(){
  this.http.brandInfo.next(this.brands)
  this.brands = ''
}

minMaxPrice() {
  this.http.minInfo.next(this.minPrice)
  this.http.maxInfo.next(this.maxPrice)
  this.minPrice = ''
  this.maxPrice = ''
}

ratingInfo(){
  this.http.ratingInfo.next(this.rating)
  this.rating = ''
}

}
