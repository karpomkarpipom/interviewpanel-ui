import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = ''
  password = ''
  invalidLogin = false;

  loginForm: FormGroup;
  submitted = false;

    constructor(private router: Router,private formBuilder: FormBuilder,private loginservice: AuthenticationService) { }
    ngOnInit() {
      this.loginForm = this.formBuilder.group({
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.minLength(6)]],
      });
  }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }


  // checkLogin() {
  //   (this.loginservice.authenticate(this.username, this.password).subscribe(
  //     data => {
  //       this.router.navigate([''])
  //       this.invalidLogin = false
  //     },
  //     error => {
  //       this.invalidLogin = true

  //     }
  //   )
  //   );

  // }


  checkLogin(): void {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }
    (this.loginservice.authenticate(this.loginForm.get('email').value, this.loginForm.get('password').value).subscribe(
          data => {
            //alert(this.loginForm.get('email').value+" Login successfully done!");
            this.router.navigate([''])
            this.invalidLogin = false
          },
          error => {
            alert("Login unsuccessful! Please provide valid credentials.");
            this.invalidLogin = true
    
          }
        )
        );

  };

}