import { Component } from '@angular/core';
import { IDeactivate } from '../app-deactivate-guard-service';

@Component({
  selector: 'app-test-deactivate',
  imports: [],
  templateUrl: './test-deactivate.html',
  styleUrl: './test-deactivate.css',
})
export class TestDeactivate implements IDeactivate{
 canExit():boolean {
if(confirm("are you sure you want to exit"))
{
  console.log('after leaving save done');
  return true;
}
else
   {
  console.log('after leaving save cancel');
 
  return false;
}
  };
}
