import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-example',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './reactive-form-example.html',
  styleUrl: './reactive-form-example.css',
})
export class ReactiveFormExample {

 IndiaStates=[
    {id:1,name:'Telangana'},
    {id:2,name:'Andhra Pradesh'},
    {id:3,name:'Odisa'}]


studentForm:FormGroup=new FormGroup({

firstName:new FormControl(""),
lastName:new FormControl(""),
userName:new FormControl(""),
city:new FormControl(""),
state:new FormControl(""),
zipCode:new FormControl(""),
IsAgreed:new FormControl(""),

  })

  OnSubmit()
{
  console.log(this.studentForm);
}

}
