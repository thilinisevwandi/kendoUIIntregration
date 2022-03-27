import { Component, OnInit } from '@angular/core';
import { SovServiceService } from '../sov-service.service';

@Component({
  selector: 'app-manage-component',
  templateUrl: './manage-component.component.html',
  styleUrls: ['./manage-component.component.css']
})
export class ManageComponentComponent implements OnInit {

  constructor(private sovService : SovServiceService) { }
  
  ngOnInit(): void {
  }

  // close(val:string){
  //   this.sovService.isDisplayManageColumnPopup = false;
  // }

  clearManageColumnsPopup(){

  }
  closeMangeColumnsPopup(){
    this.sovService.isDisplayManageColumnPopup = false;
  }
  saveMangeColumnsPopup(){
    alert("save Sucess")
    this.closeMangeColumnsPopup();
  }
}
