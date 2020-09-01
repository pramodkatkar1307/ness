import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  constructor(private el:ElementRef, private renderer:Renderer2) {
    
  }

  @HostListener("mouseover")
  public applyHighlight():void{
    this.renderer.setStyle(this.el.nativeElement, "backgroundColor","lightyellow");
    this.renderer.setStyle(this.el.nativeElement, "borderColor","green");
    
  }

  @HostListener("mouseleave")
  public removeHighlight():void{
    this.renderer.removeStyle(this.el.nativeElement, "backgroundColor");
    this.renderer.removeStyle(this.el.nativeElement, "borderColor");
  }

}
