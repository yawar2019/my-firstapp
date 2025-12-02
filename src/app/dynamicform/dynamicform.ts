import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamicform',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './dynamicform.html',
  styleUrl: './dynamicform.css',
})
export class Dynamicform implements OnInit {

  form!: FormGroup;
 formConfig=[
  {
    name:'firstName',
    label:'first Name',
    type:'text',
    value:'',
    Validators:{
      required:true
    }
  },
  {
    name:'lastName',
    label:'last Name',
    type:'text',
    value:'',
    Validators:{
      required:true
    }
  },
  {
    name:'country',
    label:'Country',
    type:'dropdown',
    value:'',
    options:[
      {key:'USA',label:'United States'},
      {key:'UK',label:'United Kingdom'},
      {key:'IN',label:'India'}
    ],
    Validators:{
      required:true
    }
  },

  {
    name:'gender',
    label:'Gender',
    type:'radio',
    value:'male',
    options:[
      {key:'male',label:'Male'},
      {key:'female',label:'Female'}
    ],
    Validators:{
      required:true
    }

  }
 ]

 constructor(private fb:FormBuilder)
 {

 }
  ngOnInit(): void {
    this.builderform();
  }

builderform()
{
  const group:{[key:string]:any}={};
  this.formConfig.forEach(control=>{
    const validators=[];
    //step1 get all validation in one array
    if(control.Validators?.required)
    {
      validators.push(Validators.required)
    }
    //step2 take group as key and value pair to dynamically bind control name,value and validators
    group[control.name]=[control.value||'',validators]
  })
//step3 bind to formbuilder group our customize formgroup which hold control name,value and validators
this.form=this.fb.group(group);

}
onSubmit()
{
if(this.form.valid)
  {

console.log(this.form.value) 
 }
 else{
console.log('form is invalid'); 

 } 
}
}