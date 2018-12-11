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

@Component({
  selector: 'app-selec',
  templateUrl: './selec.component.html',
  styleUrls: ['./selec.component.css']
})
export class SelecComponent implements OnInit {

  _postsArray: IPosts[];
  _examsArray: IExam[];

   constructor(private apiSerivce: ApiService) {
   }

   ngOnInit(): void {
       this.getExams();
   }

   getPosts(): void {
       this.apiSerivce.getPosts()
           .subscribe(
               resultArray => this._postsArray = resultArray,
               error => console.log("Error :: " + error)
           )
   }


   getExams(): void {
       this.apiSerivce.getExams()
           .subscribe(
               resultArray => this._examsArray = resultArray,
               error => console.log("Error :: " + error)
           )
   }



 }
