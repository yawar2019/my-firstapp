import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User implements OnInit  {

  user={
  id:"",
  name:""
 }
  constructor(private route:ActivatedRoute)
 {

 }
  ngOnInit(): void {
  //  this.user={
  //   id:this.route.snapshot.params['id'],
  //   name:this.route.snapshot.params['name']
  //  }
   this.route.params.subscribe((data:Params)=>{

    this.user={
    id:data['id'],
    name:data['name']
   }

   })
  }



}
