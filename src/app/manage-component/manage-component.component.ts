import { AfterViewInit, Component, OnInit } from '@angular/core';
import { SovServiceService } from '../sov-service.service';

@Component({
  selector: 'app-manage-component',
  templateUrl: './manage-component.component.html',
  styleUrls: ['./manage-component.component.css']
})
export class ManageComponentComponent implements OnInit,AfterViewInit {

  constructor(private sovService : SovServiceService) { }
  public items: string[] = ["Item 1", "Item 2", "Item 3"];
  public items2: string[] = ["test 1", "test 2", "test 3"];
  /**
   * Adding style for dialog after component cration.
   */
  ngAfterViewInit(): void {

    // cutomize dialog
    document.querySelector('.k-dialog ')?.setAttribute('style',
      'background-color:#FFFFFF;border:4px solid #CECECE;margin:0px;padding:0px;height:587px')

    // customize  dialog header
   document.querySelector('.k-dialog-titlebar')?.setAttribute('style',
      'background-color: #FFFFFF;color:#333333;height:40px;padding:0px 16px;margin:0px;font-family:Roboto,Regular');

    // document.querySelectorAll('.k-panelbar .k-item .k-link.k-state-selected .k-panelbar .k-panelbar-header .k-link.k-state-selected')
    // .forEach(x=>{
    //   x.setAttribute('style','background-color:black;color:black')
    // })

    document.querySelector('.k-panelbar > .k-item > .k-link, .k-panelbar > .k-panelbar-header > .k-link')
    ?.setAttribute('style','padding:0px');
    
    document.querySelectorAll('.k-panelbar > .k-item > .k-link, .k-panelbar > .k-panelbar-header > .k-link')
    .forEach(x=>{
      x.setAttribute('style','padding:0px')
    })

    // document.querySelectorAll('.k-state-selected').forEach(x=>{
    //   x.setAttribute('style','color:red')
    // })
    document.querySelectorAll('.k-link').forEach(x=>{
      x.setAttribute('style','color:black;background-color:#e7e7e7;padding:0px;')
    })
  }
  
  
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
