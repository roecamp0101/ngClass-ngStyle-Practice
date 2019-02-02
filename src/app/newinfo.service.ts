import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewinfoService {

  constructor(private https: HttpClient) { }

  getsomeSeverInfo(){

    //Always map within the service
  return  this.https.get('http://jsonplaceholder.typicode.com/users/')
                  .pipe(
                    map(
                      (response) => {
                         return response;
                      }
                    ),
                    catchError(
                      (error) => {
                      return  throwError ('something went every wrong' + error)
                      }
                    )
                  )
  }

}
