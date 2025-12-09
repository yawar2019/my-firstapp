import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MyFirstService } from '../my-first-service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IUser } from '../model/User';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-app',
  imports: [CommonModule,FormsModule],
  providers:[MyFirstService],
  changeDetection:ChangeDetectionStrategy.Default,
  templateUrl: './user-app.html',
  styleUrl: './user-app.css',
})
export class UserApp implements OnInit {
  constructor(private router: Router,public service:MyFirstService,private cdr: ChangeDetectorRef)
  {
 
  }
    loadData()
    {
 this.service.getUsers().subscribe(data=>{
    //this.service.AllUser.set(data);
    this.service.AllUser=data;
    this.cdr.markForCheck();   // <--- forces UI to update with OnPush
    console.log(this.service.AllUser);
    

   })
    }
  ngOnInit(): void {
   
    this.loadData();

  }
  
  userAdd(Userdet:any) //UserName:string,Password:string,Role:number
  {
    if(Userdet.UserId==0 || Userdet.UserId==undefined ){
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
    
     this.service.SaveUser(user).subscribe(data=>{
       this.loadData();
       alert('inserted');
     
   })
  }
else{
  const user: IUser = {
    UserId:  Userdet.UserId,          // static if not passed
    UserName:Userdet.UserName,           // from parameter
    Password: Userdet.Password,           // from parameter
    Role: Userdet.Role,                   // from parameter

    CreatedBy: 1,                       // static
    CreatedOn: new Date(),              // static
    UpdatedBy: 1,                       // static
    UpdatedOn: new Date()               // static
 };
    this.service.UpdateUser(user).subscribe((data:IUser)=>{
       this.loadData();
        alert("Updated successfully"+Userdet.UserId);
     
   })
}

  }
  Delete(id:number)
  {
 this.service.DeleteUser(id).subscribe(data=>{
    this.loadData();

    alert('Deleted Successfully');
   
    })
  }

  Edit(id:number)
  {
  let user=this.service.AllUser.find(x=>x.UserId==id);
  this.service.User=(user)as IUser;
  console.log(this.service.User);
  }

}
