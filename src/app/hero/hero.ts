import { Component, EventEmitter, input, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {

  @Input() parentData:string="";
  @Output() childData=new  EventEmitter();

  sendChildDataInfo()
  {
    this.childData.emit('Got Child Data');
  }
}
