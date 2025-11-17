import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { User } from './user/user';
import { AppGuardService } from './app-guard-service';
import { Login } from './login/login';

export const routes: Routes = [
    {path:'',component:Home},
   {path:'login',component:Login},
    {path:'about/:id/:name',component:About,canActivate:[AppGuardService]},
    {path:"contact",
    component:Contact,
    children:[{path:':id/:name',component:User}]
    },
];
