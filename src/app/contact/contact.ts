import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { IDeactivate } from '../app-deactivate-guard-service';

@Component({
  selector: 'app-contact',
  imports: [RouterLink,RouterOutlet],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact implements IDeactivate {
  canExit():boolean {
if(confirm("are you sure you want to exit"))
{
  return true;
}
else{
  return false;
}
  };

}
