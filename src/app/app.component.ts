import { AfterContentInit, AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    console.log(this.left.nativeElement)
    this.left.nativeElement.scroll(()=>{
      
    }) 
  }
  @ViewChild('left') left : any;
  @ViewChild('right') right: any;

  // @HostListener('wheel',['$event'])
  // public onScroll(event:WheelEvent){
  //   this.left.nativeElement.scrollLeft += event.deltaY;
  // }

  title = 'testUI';
  OnScroll(event:any){
    this.right.nativeElement.scrollTop =this.left.nativeElement.scrollTop;
  }



  
}
