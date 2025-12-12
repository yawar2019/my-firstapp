import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SignalApi {
  countSpecVar=signal(30);
  
  updateValue()
  {
    this.countSpecVar.set(70);
  }
}
