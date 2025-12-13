import { Component } from '@angular/core';
import { counterSignal } from '../signal-compox/signal-compox';
@Component({
  selector: 'app-signal-compox1',
  imports: [],
  templateUrl: './signal-compox1.html',
  styleUrl: './signal-compox1.css',
})
export class SignalCompox1 {
counter=counterSignal;
}
