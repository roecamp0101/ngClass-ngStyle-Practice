import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  @Input() carsInfo:[]; //@Input() varible reference for cars array of objects

}
