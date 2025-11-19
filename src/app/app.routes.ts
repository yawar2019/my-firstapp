import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { User } from './user/user';
import { AppGuardService } from './app-guard-service';
import { Login } from './login/login';
import { AppDeactivateGuardService } from './app-deactivate-guard-service';
import { TestDeactivate } from './test-deactivate/test-deactivate';

export const routes: Routes = [
    {path:'',component:Home},
   {path:'login',component:Login},
   {path:'testDeactivate',component:TestDeactivate,canDeactivate:[AppDeactivateGuardService]},

    {path:'about/:id/:name',component:About,
        canActivate:[AppGuardService]
    },
    {path:"contact",
    component:Contact,
    canDeactivate:[AppDeactivateGuardService]
    //children:[{path:':id/:name',component:User,canActivateChild:[AppGuardService]},
        
    //]
    },
];
