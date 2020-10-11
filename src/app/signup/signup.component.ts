import { Component, OnInit } from '@angular/core';
import { InterviewPanelServiceService,User } from '../service/interview-panel-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../_helpers/must-match.validator';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user: User = new User("","","","");

 
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,private interviewPanelService:InterviewPanelServiceService) { }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
          firstName: ['', Validators.required],
          lastName: ['', Validators.required],
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.minLength(6)]],
          confirmPassword: ['', Validators.required]
      }, {
          validator: MustMatch('password', 'confirmPassword')
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }


  createUser(): void {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
    this.interviewPanelService.createUser(this.registerForm.value)
        .subscribe( data => {
          alert(this.registerForm.value.fields.firstName+" signup successfully done!");
        },  err => {
          if(err.status==500)
          console.log(err)
          alert("User already exists!");
          
        });

  };

}
