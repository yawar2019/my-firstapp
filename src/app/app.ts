import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './home/home';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Home],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title='My-first app';
  Hero:string='Shaktiman';

  age:number=21;
  carList=['BMW','TATA','Nano'];
}
