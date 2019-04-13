import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
//import { Observable } from 'rxjs';


export interface Role {
  id : Number;
  name : string;
  description : string;

}

@Injectable()
export class ApiService {

  API_URL  = environment.apiUrl;
  Role: Role;

  constructor(  private http: HttpClient  )
  { }

  getRoles(): Observable<Role[]> {
    return this.http.get<Role[]>(this.API_URL + 'api/role');
  }

}
