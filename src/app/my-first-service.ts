import { Injectable, signal } from '@angular/core';
import { IUser } from './model/User';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MyFirstService {
  url="https://localhost:44371/";

 User: IUser = {
    UserId: 0,
    UserName: "",
    Password: "",
    Role: null,
    CreatedBy: null,
    CreatedOn: null,
    UpdatedBy: null,
    UpdatedOn: null
  };

   AllUser:IUser[]=[];
//AllUser = signal<any[]>([]);
  constructor(private http:HttpClient)
  {
  }

  getUsers():Observable<any>
  {
return this.http.get<any[]>(this.url+'api/UseApi');
  }


  SaveUser(User?:IUser):Observable<any>
  {
    return this.http.post(this.url+'api/UseApi/',User)
  }
  DeleteUser(UserId:number):Observable<any>
  {
    return this.http.delete(this.url+'api/UseApi/'+UserId)
  }
UpdateUser(User?:IUser):Observable<any>
  {
    return this.http.put(this.url+'api/UseApi/'+User?.UserId,User)
  }
}
