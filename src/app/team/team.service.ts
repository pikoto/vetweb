import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';

export interface TeamUser {
  first_name : string;
  id : string;
  last_name	: string;
  login	: string;
  science_degree	: string;
  role	: {
          description	: string;
          id	: string;
          name :string;	}

}

export interface TeamFull {
  description	: string;
  description2	: string;
  user : {
    first_name	: string;
    id : string;
    last_name	: string;
    login	: string;
    role	: {
      description	: string;
      id :	string;
      is_team	: string;
      name	: string;
      science_degree	: string; }
    }
}

export interface Static {
  name: string;
  key: string;
}

@Injectable()
export class TeamService {

  API_URL  = environment.apiUrl;
  Static: Static;
  TeamUser: TeamUser;
  TeamFull: TeamFull;


  constructor(  private http: HttpClient  )
  { }

  getStatics(): Observable<Static[]> {
    return this.http.get<Static[]>("assets/json/team.static.json");
  }

  getTeamUser(): Observable<TeamUser[]> {
    return this.http.get<TeamUser[]>(this.API_URL + 'api/team')
  }
  getTeamFull(): Observable<TeamFull[]> {
    return this.http.get<TeamFull[]>(this.API_URL + 'api/team_role_user_info')
  }
}
