import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../userdata.service';


@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.css']
})
export class ModulesComponent implements OnInit {


  holduserData: any[];
  show;
  allstring:string = 'All';

constructor(private userdataservice: UserdataService) { }



 onItemClick(event)
{
   this.show = event.target.innerHTML;

}


  ngOnInit() {
    this.holduserData = this.userdataservice.userData;

  }

}
