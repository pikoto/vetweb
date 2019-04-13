import { Component, OnInit } from '@angular/core';
import { TeamService } from "./team.service";

export interface ITeamUser {
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

export interface ITeamFull {
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
      science_degree	: string;
    }
  }
}

export interface IStatic {
  name: string;
  key: string;
}

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  _teamsArray: ITeamFull[];
  _usersArray: ITeamUser[];
  _staticArray: IStatic[];

  constructor(private teamSerivce: TeamService) { }

  ngOnInit(): void {
      this.getFull();
      this.getTeam();
      this.getStatics();
  }

  getFull(): void {
      this.teamSerivce.getTeamFull()
          .subscribe(
              resultArray => this._teamsArray = resultArray,
              error => console.log("Error :: " + error)
          )
  }

  getTeam(): void {
      this.teamSerivce.getTeamUser()
          .subscribe(
              resultArray => this._usersArray = resultArray,
              error => console.log("Error :: " + error)
          )
  }

  getStatics(): void {
      this.teamSerivce.getStatics()
          .subscribe(
              resultArray => this._staticArray = resultArray,
              error => console.log("Error :: " + error)
          )
  }

}
