import { Component } from '@angular/core';

@Component({
  selector: 'x,.x,[x]',
  imports: [],
  // templateUrl: './home.html',
  template:'<h1>{{title}}</h1>',
  // styleUrl: './home.css',
  styles:'h1{color:red;}'
})
export class Home {

  title:number=1.982;

}
