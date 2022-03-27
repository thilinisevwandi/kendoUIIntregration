import { Component, OnInit,EventEmitter, ViewChild, OnDestroy, AfterViewInit } from '@angular/core';
import { DataBindingDirective, DataStateChangeEvent, GridDataResult } from '@progress/kendo-angular-grid';
import { sampleProducts } from "../sov-item-grid/product";
import { process, State } from "@progress/kendo-data-query";
import { employees } from '../employees';
import {SampleItem} from '../sovItem';
import { SovServiceService } from '../sov-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sov-item-description',
  templateUrl: './sov-item-description.component.html',
  styleUrls: ['./sov-item-description.component.css']
})
export class SovItemDescriptionComponent implements OnInit ,OnDestroy,AfterViewInit{
  constructor(private sovService : SovServiceService) { }
  ngAfterViewInit(): void {
    document.querySelectorAll('.k-grid .k-grid-content').forEach(x =>{
      x.addEventListener('scroll',((e:any)=>{
        document.querySelectorAll('.k-grid .k-grid-content').forEach(y=>{
        y.scrollTop = x.scrollTop
       })     
          return
      }))     
    })
  }

  sub : Subscription = new Subscription;
  isToggle = new EventEmitter();
  public mySelection: string[] = [];
  collapseAll = false;
  // columnWidth = "25vw";
  state: State = {
    skip: 0,
    take :25,

    // filter: {
    //   logic: "and",
    //   filters: [{ field: "itemId", operator: "contains", value: "Chef" }],
    // },
  };
  filter:any = {
    logic: "and",
    filters: [],
  }
   gridData: GridDataResult = process(SampleItem, this.state);
   
   ngOnInit(): void {
     this.sub = this.sovService.isCollapseAll$.subscribe(val=>this.collapseAll = val)    
  }
   dataStateChange(state: DataStateChangeEvent): void {
    this.state = state;
    this.gridData = process(SampleItem, this.state);
  }

  toggleAllSOVSlide(){
    // this.isToggle.emit(true);
    this.sovService.toggleAllSlideBar(!this.collapseAll);
  }

  // isToggle = new EventEmitter();
  // @ViewChild(DataBindingDirective) dataBinding: any ;
  // public gridData: any[] = employees;
  // public gridView: any[] = [];

  // public mySelection: string[] = [];

  // constructor(){}

  // ngOnInit(): void {
  //   this.gridView = this.gridData;
  // }

  // public onFilter(inputValue: string): void {
  //   this.gridView = process(this.gridData, {
  //     filter: {
  //       logic: "or",
  //       filters: [
  //         {
  //           field: "full_name",
  //           operator: "contains",
  //           value: inputValue,
  //         },
  //         {
  //           field: "job_title",
  //           operator: "contains",
  //           value: inputValue,
  //         },
  //         {
  //           field: "budget",
  //           operator: "contains",
  //           value: inputValue,
  //         },
  //         {
  //           field: "phone",
  //           operator: "contains",
  //           value: inputValue,
  //         },
  //         {
  //           field: "address",
  //           operator: "contains",
  //           value: inputValue,
  //         },
  //       ],
  //     },
  //   }).data;

  //   this.dataBinding.skip = 0;
  // }

  // toggleAllSOVSlide(){
  //   this.isToggle.emit(true);
  // }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
