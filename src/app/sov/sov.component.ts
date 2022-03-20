import { Component, Inject, OnInit } from '@angular/core';
import { sovPanelHeaderListToken } from '../providers';

@Component({
  selector: 'app-sov',
  templateUrl: './sov.component.html',
  styleUrls: ['./sov.component.css']
})
export class SovComponent implements OnInit {

  constructor( @Inject(sovPanelHeaderListToken) public sovPanelHeaderList : any) { }

  ngOnInit(): void {
  }

}
