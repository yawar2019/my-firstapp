import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appAppHighlightTextDirectives]'
})
export class AppHighlightTextDirectives  implements OnInit {

  constructor(private element :ElementRef) 
  { 


  }
  ngOnInit(): void {
  (this.element.nativeElement as HTMLElement).style.color="Green";
  }

}
