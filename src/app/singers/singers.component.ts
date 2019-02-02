import { Component, OnInit } from '@angular/core';
import { Mags } from './mags';
import { NewinfoService } from '../newinfo.service';

@Component({
  selector: 'app-singers',
  templateUrl: './singers.component.html',
  styleUrls: ['./singers.component.css']
})
export class SingersComponent implements OnInit {

  constructor(private newinfo: NewinfoService) { }

  holdinfo:any;

  ngOnInit() {

    //Always subscribe within the component
    this.newinfo.getsomeSeverInfo()
              .subscribe(
                (response) => {
                return this.holdinfo = response;
                },
                (error) => {
                  return 'something went crazy wrong, please fix ' + error;
                }
              )
  }


  //the magazines array of objects will reference the Mags[] interface
  magazines: Mags[] = [
    {name: 'people', type: 'gossip', cost: 10, popularity: 79/100},
    {name: 'O', type: 'info', cost: 15, popularity: 88/100},
    {name: 'natl enquirer', type: 'nature', cost: 22, popularity: 78/100},
    {name: 'medical now', type: 'medical info', cost: 14, popularity: 65/100}
  ]

}
