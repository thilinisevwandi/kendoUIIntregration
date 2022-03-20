import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SovServiceService {

  constructor() { }

  // isCollapseAll = false;
  private isCollapseAll = new Subject<boolean>();
  isCollapseAll$ = this.isCollapseAll.asObservable();

  toggleAllSlideBar(val:boolean){
    this.isCollapseAll.next(val);
  }
}
