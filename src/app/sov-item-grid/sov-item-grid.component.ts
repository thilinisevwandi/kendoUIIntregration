import { AfterViewInit, Component, EventEmitter, Input, OnDestroy, OnInit } from '@angular/core';
import { DataStateChangeEvent, GridDataResult } from '@progress/kendo-angular-grid';

import { SampleItem } from "../sovItem";
import { process, State } from "@progress/kendo-data-query";
import { SovServiceService } from '../sov-service.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-sov-item-grid',
  templateUrl: './sov-item-grid.component.html',
  styleUrls: ['./sov-item-grid.component.css']
})
export class SovItemGridComponent implements OnInit,OnDestroy ,AfterViewInit{

  constructor(private sovService: SovServiceService) { }
  ngAfterViewInit(): void {
  //   document.querySelector('.k-grid .k-grid-content')?.addEventListener('scroll',((e:any)=>{
  //     console.log(e)
  //   //  e.scrollTop = 0;
  //  //  e.target.scrollTop = e.currentTarget.scrollTop;
  //    document.querySelectorAll('.k-grid .k-grid-content').forEach(x=>{
  //   //  x.scrollTop = e.scrollTop
  
  //     x.scrollTop = e.scrollTop
 
  //   })
     // this.right.nativeElement.scrollTop =this.left.nativeElement.scrollTop;
     // alert("hai")
   // }))
  //  document.querySelectorAll('.k-grid .k-grid-content').forEach(x =>{
  //    x.addEventListener('scroll',((e:any)=>{
  //      document.querySelectorAll('.k-grid .k-grid-content').forEach(y=>{
  //       x.addEventListener('scroll',((e:any)=>{
  //           y.scrollTop = x.scrollTop;
  //       }))
  //     })
     
         
  //    }))
  //  })
  
  }

  isCollapse  = false;
  isDisplayContent = true;
  sub: Subscription  = new Subscription;
  state: State = {
    skip: 0,
    take : 25,

    // Initial filter descriptor
    filter: {
      logic: "and",
      filters: [],
    },
  };
  filter:any = {
    logic: "and",
    filters: []
  }
   gridData: GridDataResult = process(SampleItem, this.state);
    @Input() slidePanelName = '';
   dataStateChange(state: DataStateChangeEvent): void {
    this.state = state;
    this.gridData = process(SampleItem, this.state);
  }
  ngOnInit(): void {
    // this.isToggle.subscribe(val=>{
    //   this.isCollapse = !this.isCollapse
    // })
    // this.isCollapse = this.sovService.isCollapseAll
   this.sub = this.sovService.isCollapseAll$.subscribe(collapseAll=>{
        this.isCollapse = collapseAll;
    })
  }
  toggleSOVContent(){
    this.isCollapse = !this.isCollapse;
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  OnScroll(event:any){
  //  this.right.nativeElement.scrollTop =this.left.nativeElement.scrollTop;
  alert("hai")
  }

}
