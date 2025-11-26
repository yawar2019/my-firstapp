import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-simple-template-form',
  imports: [CommonModule,FormsModule],
  templateUrl: './simple-template-form.html',
  styleUrl: './simple-template-form.css',
})
export class SimpleTemplateForm {


  IndiaStates=[
    {id:1,name:'Telangana'},
    {id:2,name:'Andhra Pradesh'},
    {id:3,name:'Odisa'},]



studentObj:any={

firstName:"",
lastName:"",
userName:"",
city:"",
state:"",
ZipCode:"",
IsAgreed:false


}

OnSubmit()
{
  console.log(this.studentObj);
}


}