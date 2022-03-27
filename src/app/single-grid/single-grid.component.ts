import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-single-grid',
  templateUrl: './single-grid.component.html',
  styleUrls: ['./single-grid.component.css']
})
export class SingleGridComponent implements OnInit ,AfterViewInit{
  @ViewChild('grid') grid : any;
  constructor() { }
  ngOnInit(): void {
  
  }
  ngAfterViewInit(): void {
    console.log(this.grid.nativeElement.innerHTML)
    this.grid.nativeElement.innerHTML = "jdjdjjd"
    // this.grid.nativeElement.kendoGrid({
    //       columns: [{
    //           field: "FirstName",
    //           title: "First Name"
    //       },
    //       {
    //           field: "LastName",
    //           title: "Last Name"
    //       }],
    //       dataSource: {
    //           data: [{
    //               FirstName: "Joe",
    //               LastName: "Smith"
    //           },
    //           {
    //               FirstName: "Jane",
    //               LastName: "Smith"
    //           }]
    //       }
    //   });
     }
  }





