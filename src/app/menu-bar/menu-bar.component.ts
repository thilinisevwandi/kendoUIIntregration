import { Component, OnInit } from '@angular/core';
import { SovServiceService } from '../sov-service.service';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

  constructor( private sovService: SovServiceService) { }

  ngOnInit(): void {
  }

  dispalyMangeColumnsPopup(){
    this.sovService.isDisplayManageColumnPopup = true;
  }

}
