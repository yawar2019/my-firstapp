import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { HooksOnChanges } from '../hooks-on-changes/hooks-on-changes';

@Component({
  selector: 'app-hooks-of-an-angular',
  imports: [HooksOnChanges],
  templateUrl: './hooks-of-an-angular.html',
  styleUrl: './hooks-of-an-angular.css',
})
export class HooksOfAnAngular implements
 OnInit,
 DoCheck,
 AfterContentInit,
 AfterContentChecked,
 AfterViewInit,
 AfterViewChecked,
 OnDestroy
 {
  age=0;
  name='';
constructor()
{
  console.log('constructor is called');
}
  ngOnDestroy(): void {
    console.log('Destroy  Method is Called')   
  }
  ngAfterViewChecked(): void {
 console.log('ngAfterViewChecked Method is Called')   

  }
  ngAfterViewInit(): void {
   console.log('ngAfterViewInit Method is Called')   

  }
  ngAfterContentChecked(): void {
         console.log('ngAfterContentChecked Method is Called')   
  }
  ngAfterContentInit(): void {
         console.log('ngAfterContentInit Method is Called')   
  }
  ngDoCheck(): void {
      console.log('DoCheck Method is Called')   

  }
  ngOnInit(): void {
  this.age=18;
 this.name='heman';
  console.log('ngOninit Method is Called')   
  }

}
