import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  constructor() { }

  public loading:BehaviorSubject<boolean> = new BehaviorSubject(false)

  startLoading(){
    this.loading.next(true)
  }
  stopLoading(){
    this.loading.next(false)
  }
}
