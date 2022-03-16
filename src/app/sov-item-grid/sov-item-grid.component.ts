import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { DataStateChangeEvent, GridDataResult } from '@progress/kendo-angular-grid';

import { sampleProducts } from "./product";
import { process, State } from "@progress/kendo-data-query";


@Component({
  selector: 'app-sov-item-grid',
  templateUrl: './sov-item-grid.component.html',
  styleUrls: ['./sov-item-grid.component.css']
})
export class SovItemGridComponent implements OnInit {

  constructor() { }

  private _isToggle = false;

  @Input() isToggle = new EventEmitter();

  isDisplayContent = true;
  isCollapse = true;
   state: State = {
    skip: 0,
    take : 5,

    // Initial filter descriptor
    filter: {
      logic: "and",
      filters: [{ field: "ProductName", operator: "contains", value: "Chef" }],
    },
  };
  filter:any = {
    logic: "and",
    filters: [{ field: "ProductName", operator: "contains", value: "Chef" }],
  }
   gridData: GridDataResult = process(sampleProducts, this.state);

   dataStateChange(state: DataStateChangeEvent): void {
    this.state = state;
    this.gridData = process(sampleProducts, this.state);
  }
  ngOnInit(): void {
    this.isToggle.subscribe(val=>{
      this.isCollapse = !this.isCollapse
    })
  }
  toggleSOVContent(){
    this.isCollapse = !this.isCollapse
  }
}
