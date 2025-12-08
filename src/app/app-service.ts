import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  isLogin=false;
  setAuthDetails(value:string)
  {
    localStorage.setItem('ValidCred',value);
  }

  getAuthDetails()
  {
    return localStorage.getItem('ValidCred')?.toString();
  }

  
}
