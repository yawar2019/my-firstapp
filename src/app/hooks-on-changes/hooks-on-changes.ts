import { Component, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-hooks-on-changes',
  imports: [],
  templateUrl: './hooks-on-changes.html',
  styleUrl: './hooks-on-changes.css',
})
export class HooksOnChanges implements OnChanges {
ngOnChanges(changes: SimpleChanges): void {
 
  console.log('changes is called.'+changes);
}
@Input() TestInput="";


}

