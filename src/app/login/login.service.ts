import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';


export interface User {
  login : string;
  password : string;
  first_name : string;
  last_name : string;
  science_degree : string;
  role_id : Number;
}



@Injectable()
export class LoginService {

  API_URL  = environment.apiUrl;
  User: User;

  constructor(  private http: HttpClient )
  { }

  postLogin(_postArray : User): Observable<User[]>  {
    let httpHeaders = new HttpHeaders({
        'Content-Type' : 'application/json',
        'Cache-Control' : 'no-cache',
    });
    let options = {
        headers: httpHeaders
    };

    return this.http.post<User[]>(this.API_URL + 'api/users', _postArray, options)
  }

}
