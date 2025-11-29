import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, AbstractControl, FormGroup, ValidationErrors, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './form-builder.html',
  styleUrl: './form-builder.css',
})
export class FormBuilderExam implements OnInit   {


  IndiaStates=[
    {id:1,name:'Telangana'},
    {id:2,name:'Andhra Pradesh'},
    {id:3,name:'Odisa'},]

  studentForm: FormGroup;
  IsuserNameAvailable=false;
  constructor(private fbuilder:FormBuilder)
  {
this.studentForm=this.fbuilder.group(
  {
    firstname:['',[Validators.required]],
    lastname:'',
    username:['',[Validators.required]],
    city:'',
    state:'',
    zipcode:'',
    IsAgreed:false

  })
  }
 
  ngOnInit(): void {
  }

    OnSubmit()
{
  if(this.studentForm.controls['firstname'].errors?.['required'])
  {
  this.IsuserNameAvailable=true;
  }
  else{
  this.IsuserNameAvailable=false;
  }
  console.log(this.studentForm);
}

}
