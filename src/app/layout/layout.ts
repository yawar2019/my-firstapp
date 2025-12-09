import { Component } from '@angular/core';
import { Home } from '../home/home';
import { About } from '../about/about';
import { Contact } from '../contact/contact';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { UserApp } from '../user-app/user-app';

@Component({
  selector: 'app-layout',
  imports: [Home,About,Contact,UserApp,RouterOutlet,RouterLink,RouterLinkActive],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {

}
