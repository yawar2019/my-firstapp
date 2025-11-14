import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About  implements OnInit{

 user={
  id:"",
  name:""
 }

 Query={
  page:"",
  search:""
 }
 constructor(private route:ActivatedRoute)
 {}
 ngOnInit(): void {
//  this.user={   
//   id:this.route.snapshot.params['id'],
//   name:this.route.snapshot.params['name'],
//  }

//path params
 this.route.params.subscribe((data:Params)=>{
this.user={
  id:data['id'],
  name:data['name']
}
 })

//specific to query params
  this.route.queryParams.subscribe((data:Params)=>{
console.log('subscribe:',data);//data['search']
this.Query={
  page:data['page'],
  search:data['search']
}
 })


console.log(this.route.snapshot.queryParams);
console.log(this.route.snapshot.params);
}



}
