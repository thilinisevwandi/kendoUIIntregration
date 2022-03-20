import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMouseWheelScroll]'
})
export class MouseWheelScrollDirective {

  constructor(private element : ElementRef) { }

  @HostListener('wheel',['$event'])
  public onScroll(event:WheelEvent){
    this.element.nativeElement.scrollLeft += event.deltaY;
  }

}
