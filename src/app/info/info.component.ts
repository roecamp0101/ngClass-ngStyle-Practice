import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { GetinfoService } from '../getinfo.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  holdinfo: any;

  infos:any;
  cd: any[];
  datas: any[];


  constructor(private appc: AppComponent, private getinfos: GetinfoService) { }

  ngOnInit() {
      this.holdinfo = this.appc.cars;
      this.getinfos.getServerInfo()
                .subscribe(
                  (datas:any) =>{
                    const myArray = [];

                    for(let key in datas){
                      myArray.push(datas[key])
                    }
                    this.infos = myArray[5];

                  }
                )


          /*
              .subscribe(
                (datas: any) =>{
                  const myArray = [];
                  for(let key in datas){
                    myArray.push(datas[key])
                  }
                  this.infos = myArray;
                  console.log(this.infos)
                }
              )
                  */

    }

}
