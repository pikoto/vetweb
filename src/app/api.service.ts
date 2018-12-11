import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
//import { Observable } from 'rxjs';


export interface Api {
  id:	number;
  title: string;
  author: string;
}

export interface Exam {
  created_at: string;
  description: string;
  id: number;
  last_updated_by: string;
  title: string;
  updated_at: string;
}

@Injectable()
export class ApiService {

  API_URL  = environment.apiUrl;
  Api: Api;

  constructor(  private http: HttpClient  )
  { }

  getPosts(): Observable<Api[]> {
    return this.http.get<Api[]>(this.API_URL + 'posts');
  }

  getExams(): Observable<Exam[]> {
    return this.http.get<Exam[]>(this.API_URL + 'exams');
  }

}
