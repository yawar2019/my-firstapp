import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './home/home';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppHighlightTextDirectives } from './app-highlight-text-directives';
import { RedTextHighlightColor } from './red-text-highlight-color';
import { Hero } from './hero/hero';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Home,FormsModule,CommonModule,AppHighlightTextDirectives,RedTextHighlightColor,Hero],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title='My-first app';
  Hero:string='Heman';

  age:number=21;
  carList=['BMW','TATA','Nano'];

  sports=[
    {id:1,name:'Football'}
   ,{id:2,name:'Cricket'},
     {id:3,name:'Kabadi'}]
      isAvailable=false;
     xyz="myRedclass";
     boomboom="first";
     firstclassArray=['first','second']
     firstclassObj={first:false,second:true};

    firstStyle={"color":"blue","background-color":"orange"};
    secondStyle=this.isAvailable?'green':'red';
    UserName="Hameshwar";
message="";
  // fun= ()=>{

  // }

  fun()
  {
    console.log('Good Morning Guys');
  }

fun2()
  {
    alert('I am Iron Man');
  }

  fun3(a:any)
  {
    alert('I am Iron Man '+a);
  }


// How to  Pass data from parent Component to child?


    }
