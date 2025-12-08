import { Component, OnInit } from '@angular/core';
import { MyFirstService } from '../my-first-service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IUser } from '../model/User';
@Component({
  selector: 'app-user-app',
  imports: [CommonModule,FormsModule],
  providers:[MyFirstService],
  templateUrl: './user-app.html',
  styleUrl: './user-app.css',
})
export class UserApp implements OnInit {
  constructor(public service:MyFirstService)
  {

  }
    
  ngOnInit(): void {
    this.service.getUsers().subscribe(data=>{
    this.service.AllUser=data;
    alert('hey');

    })

  }
  
  userAdd(Userdet:any) //UserName:string,Password:string,Role:number
  {
     console.log('input '+Userdet.UserName);
//      debugger;
 const user: IUser = {
    UserId:   0,          // static if not passed
    UserName:Userdet.UserName,           // from parameter
    Password: Userdet.Password,           // from parameter
    Role: Userdet.Role,                   // from parameter

    CreatedBy: 1,                       // static
    CreatedOn: new Date(),              // static
    UpdatedBy: 1,                       // static
    UpdatedOn: new Date()               // static
 };
     console.log('input modified '+user.UserName);
    
     this.service.SaveUser(user).subscribe(data=>{
alert('inserted');

   })
    
  }
  Delete(id:number)
  {
 this.service.DeleteUser(id).subscribe(data=>{
    alert('Deleted Successfully');
    })
  }

}
