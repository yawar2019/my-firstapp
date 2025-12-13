import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { User } from './user/user';
import { AppGuardService } from './app-guard-service';
import { Login } from './login/login';
import { AppDeactivateGuardService } from './app-deactivate-guard-service';
import { TestDeactivate } from './test-deactivate/test-deactivate';
import { UserApp } from './user-app/user-app';
import { PipeExample } from './pipe-example/pipe-example';
import { SignalExample } from './signal-example/signal-example';
import { SignalCompox1 } from './signal-compox1/signal-compox1';
import { Signalcompox2 } from './signalcompox2/signalcompox2';

export const routes: Routes = [
    {path:'',component:Home},
   {path:'login',component:Login},
   {path:'signalEx',component:SignalExample},
   {path:'signalCompox1',component:SignalCompox1},
   {path:'signalCompox2',component:Signalcompox2},
   {path:'user',component:UserApp},
   {path:'pipe',component:PipeExample},
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
