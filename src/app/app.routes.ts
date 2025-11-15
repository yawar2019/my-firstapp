import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { User } from './user/user';

export const routes: Routes = [
    {path:'',component:Home},
    {path:'about/:id/:name',component:About},
    {path:"contact",
    component:Contact,
    children:[{path:':id/:name',component:User}]
    },
];
