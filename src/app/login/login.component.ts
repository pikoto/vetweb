import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from "./login.service";

export interface IUser {
  login : string;
  password : string;
  first_name : string;
  last_name : string;
  science_degree : string;
  role_id : Number;
}


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  _postArray: IUser[];
  mes_error: any[];

  constructor(private formBuilder: FormBuilder, private loginService: LoginService) { }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
        login : ['', Validators.required],
        password : ['', [Validators.required, Validators.minLength(6)]],
        first_name : ['', Validators.required],
        last_name : ['', Validators.required],
        science_degree : ['', Validators.required],
        role_id : ['', Validators.required]
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }

      this._postArray = this.registerForm.value;
      this.postLogin(this._postArray);
      this.submitted = true;


    }

    postLogin(_postArray): void {
      this.loginService.postLogin(_postArray)
      //.subscribe((res)=>{ console.log(res.body)}));
       //.subscribe();

  //More flexible approach
  /*return this.http.post(this.url + "resource", JSON.stringify(resource), this.options)
      .subscribe(response => {
           if (response.ok) { // <== CHECK Response status
               //this.data = response.json();
           } else {
               // handle bad request
           }
       },
       error => {
           this.errorMessage = <any>error;
           document.getElementById("alert").innerHTML = error.json().message;
           console.log("-> " + error.status + " : " + this.errorMessage);
       });*/

    //  .subscribe(
          //resultArray => this._postArray = resultArray,
    //      data => this.mes_error = data,
    //      error => console.log("Error :: " + error)
    //  )
  //    .subscribe(
  //        data => { this._postArray = data},
  //        error => console.log("Error :: " + error)
  //    )
   }

}
