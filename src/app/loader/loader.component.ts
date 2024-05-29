import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.css'
})
export class LoaderComponent implements OnInit {
  constructor(public load:LoaderService){}
  public isLoading:boolean = false
  ngOnInit(): void {
   this.load.loading.subscribe(data=>{
      this.isLoading = data
   })


  }

}
