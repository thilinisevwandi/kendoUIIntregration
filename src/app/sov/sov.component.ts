import { Component, Inject, OnInit } from '@angular/core';
import { sovPanelHeaderListToken } from '../providers';
import { SovServiceService } from '../sov-service.service';

@Component({
  selector: 'app-sov',
  templateUrl: './sov.component.html',
  styleUrls: ['./sov.component.css']
})
export class SovComponent implements OnInit {
 get isDisplayManageColumns(){
 // return this.sovService.isDisplayManageColumnPopup ;
  return true;
 }
  constructor( @Inject(sovPanelHeaderListToken) public sovPanelHeaderList : any
  ,private sovService: SovServiceService) { }

  ngOnInit(): void {
  }

}
