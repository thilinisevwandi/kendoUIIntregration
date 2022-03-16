import { Component, OnInit,EventEmitter } from '@angular/core';
import { DataStateChangeEvent, GridDataResult } from '@progress/kendo-angular-grid';
import { sampleProducts } from "../sov-item-grid/product";
import { process, State } from "@progress/kendo-data-query";

@Component({
  selector: 'app-sov-item-description',
  templateUrl: './sov-item-description.component.html',
  styleUrls: ['./sov-item-description.component.css']
})
export class SovItemDescriptionComponent implements OnInit {

  constructor() { }

  isToggle = new EventEmitter();
  columnWidth = "25vw";
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
   
   ngOnInit(): void {
  }
   dataStateChange(state: DataStateChangeEvent): void {
    this.state = state;
    this.gridData = process(sampleProducts, this.state);
  }

  toggleAllSOVSlide(){
    this.isToggle.emit(true);
  }
}
