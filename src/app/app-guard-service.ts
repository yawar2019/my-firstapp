import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { AppService } from './app-service';
@Injectable({
  providedIn: 'root',
})
export class AppGuardService implements CanActivate,CanActivateChild  {

  constructor(private service:AppService,private router:Router)
  {

  }
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
  return  this.canActivate(childRoute,state);
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
    let result=this.service.getAuthDetails();
    if(result=="true")
    {
      return true
    }
    else{
      this.router.navigate(['/']);
      return false;
    }
  }
  
}
