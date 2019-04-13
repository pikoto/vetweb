import { Component, OnInit } from '@angular/core';
import { ApiService } from "../api.service";



export interface IPosts {
  id:	number;
  title: string;
  author: string;
}

export interface IExam {
  created_at: string;
  description: string;
  id: number;
  last_updated_by: string;
  title: string;
  updated_at: string;
}

export interface IRole {
id : Number;
name : string;
description : string;
}

@Component({
  selector: 'app-selec',
  templateUrl: './selec.component.html',
  styleUrls: ['./selec.component.scss']
})
export class SelecComponent implements OnInit {

  _postsArray: IPosts[];
  _examsArray: IExam[];
  _rolesArray: IRole[];

   constructor(private apiSerivce: ApiService) {
   }

   ngOnInit(): void {
       this.getRoles();
   }


   getRoles(): void {
       this.apiSerivce.getRoles()
           .subscribe(
               resultArray => this._rolesArray = resultArray,
               error => console.log("Error :: " + error)
           )
   }



 }
