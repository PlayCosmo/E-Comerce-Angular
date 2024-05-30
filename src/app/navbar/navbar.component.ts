import { AfterViewInit, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  constructor(public api:ApiService){}
  ngOnInit(): void {
this.takeInfo()

  }


  public number:any = 0
  takeInfo(){
    this.api.cartLength.subscribe((data:any)=>{
      this.number = data
    })
  }

}
