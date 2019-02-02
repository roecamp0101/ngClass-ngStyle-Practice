import { Component } from '@angular/core';
import { Cars } from './cars'; //Import Cars interface

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practice';

  //the cars array of objects will reference the Cars[] interface
  cars:Cars[] = [

    {id: 9, name: 'porche', model: 848932, color: 'red', online: true },
    {id: 1, name: 'lamborghini', model: 93221, color: 'yellow',  online: false },
    {id: 8, name: 'bently', model: 99302, color: 'blue',  online: false },
    {id: 12, name: 'jaguar', model: 88221, color: 'black',  online: true }

  ];

}
