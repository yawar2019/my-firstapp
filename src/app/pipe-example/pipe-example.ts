import { CurrencyPipe, DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe,JsonPipe,SlicePipe, PercentPipe } from '@angular/common';
import { Component } from '@angular/core';
import { ChangeCasePipe } from '../change-case-pipe';
import { SignalApi } from '../signal-api';

@Component({
  selector: 'app-pipe-example',
  imports: [CurrencyPipe,UpperCasePipe,LowerCasePipe,TitleCasePipe,DatePipe,JsonPipe,SlicePipe,PercentPipe,ChangeCasePipe],
  templateUrl: './pipe-example.html',
  providers:[SignalApi],
  styleUrl: './pipe-example.css',
})
export class PipeExample {

  constructor(public sig:SignalApi){
console.log(sig.countSpecVar());
  }

price:number=232323.22;
Fname:string="ravi";
Lname:string="KIRAN";
MiddleName="VEmuLa";
currentDate:Date=new Date();
empObj:any={
empname:'Sunil',
age:26,
email:'sunil@gmail.com'  
}

fruits:string[]=['apple','Orange','mango'];
temp=0.23;

}
