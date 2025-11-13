import { Component } from '@angular/core';
import { Home } from '../home/home';
import { About } from '../about/about';
import { Contact } from '../contact/contact';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [Home,About,Contact,RouterOutlet,RouterLink,RouterLinkActive,],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {

}
