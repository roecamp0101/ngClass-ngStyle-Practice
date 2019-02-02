import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetinfoService {

  constructor(private http: HttpClient) { }

    getServerInfo(){
  return  this.http.get('https://teamtreehouse.com/roeroe.json')
                  .pipe(map(
                    (response) => {
                      return response;
                    }
                  ),
                  catchError(
                    (error) => {
                      return throwError('whoooaa...something is wrong ' + error)
                    }
                  )

                )//end of pipe
    }
}
