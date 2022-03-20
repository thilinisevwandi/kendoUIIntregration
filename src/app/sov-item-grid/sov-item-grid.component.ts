import { Component, EventEmitter, Input, OnDestroy, OnInit } from '@angular/core';
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
export class SovItemGridComponent implements OnInit,OnDestroy {

  constructor(private sovService: SovServiceService) { }

  isCollapse  = false;
  isDisplayContent = true;
  sub: Subscription  = new Subscription;
  state: State = {
    skip: 0,
    take : 5,

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
}
