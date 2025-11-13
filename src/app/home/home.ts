import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'x,.x,[x]',
  imports: [],
  // templateUrl: './home.html',
  template:'<h1>{{title}}</h1><button (click)="GoToAbout()">goto about</button>',
  // styleUrl: './home.css',
  styles:'h1{color:red;}'
})
export class Home {

  title:number=1.982;

  constructor(private router:Router)
  {


  }


  GoToAbout()
  {
   this.router.navigateByUrl("/about/1/test")
   // this.router.navigate(["/about",1,'test']);
  }

}
