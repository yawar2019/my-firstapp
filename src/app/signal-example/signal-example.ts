import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { SignalApi } from '../signal-api';

@Component({
  selector: 'app-signal-example',
  imports: [CommonModule],
  providers:[SignalApi],
  templateUrl: './signal-example.html',
  styleUrl: './signal-example.css',
})
export class SignalExample {
//count=1;
constructor(public sig:SignalApi)
{

}
//a=this.sig.countSpecVar();
count=signal(55);//Declaration of Signal

updateSignal()
{
  //this.count.set(898);
  this.count.update((curr)=>curr+1);
  this.sig.updateValue();
}
users=signal([{name:'Alicia'}]);
addUser(){
this.users.update(users=>[...users,{name:'new User'}])
}
}
