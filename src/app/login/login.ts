import { Component } from '@angular/core';
import { AppService } from '../app-service';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

constructor(private apps:AppService)
{

}

login()
{
this.apps.setAuthDetails('true')
}
logout()
{
this.apps.setAuthDetails('false')

}

}

