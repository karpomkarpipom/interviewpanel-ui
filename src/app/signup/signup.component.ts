import { Component, OnInit } from '@angular/core';
import { InterviewPanelServiceService,User } from '../service/interview-panel-service.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user: User = new User("","","","");


  constructor( private interviewPanelService:InterviewPanelServiceService) {
   }

   ngOnInit(): void {
  }

  createUser(): void {
    this.interviewPanelService.createUser(this.user)
        .subscribe( data => {
          alert(data.firstName+" signup successfully done!");
        });

  };

}
