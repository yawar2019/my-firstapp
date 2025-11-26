import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRedTextHighlightColor]'
})
export class RedTextHighlightColor implements OnInit {

  constructor(private element:ElementRef,private renderer:Renderer2) { }
  ngOnInit(): void {
  this.renderer.setStyle(this.element.nativeElement,"color","red");
  }

  // @HostListener('click') onclick(event:Event)
  // {
  // this.renderer.setStyle(this.element.nativeElement,"color","Blue");

  // }
}
