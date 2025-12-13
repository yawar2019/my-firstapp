import { Component } from '@angular/core';
import { counterSignal } from '../signal-compox/signal-compox';
@Component({
  selector: 'app-signalcompox2',
  imports: [],
  templateUrl: './signalcompox2.html',
  styleUrl: './signalcompox2.css',
})
export class Signalcompox2 {
counter=counterSignal;
Increment()
{
  this.counter.update(value=>value+1);
}
}
