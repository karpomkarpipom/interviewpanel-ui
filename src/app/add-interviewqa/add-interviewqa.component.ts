import { Component, OnInit } from '@angular/core';
import { InterviewPanelServiceService,InterviewQuestionAnswer } from '../service/interview-panel-service.service';

@Component({
  selector: 'app-add-interviewqa',
  templateUrl: './add-interviewqa.component.html',
  styleUrls: ['./add-interviewqa.component.css']
})
export class AddInterviewqaComponent implements OnInit {

  user: InterviewQuestionAnswer = new InterviewQuestionAnswer("","","","","","");


  constructor( private interviewPanelService:InterviewPanelServiceService) {

 

   }

  ngOnInit(): void {
  }


  createInterviewQA(): void {
    this.interviewPanelService.createInterviewQA(this.user)
        .subscribe( data => {
          alert("Interview Question Answer stored successfully.");
        });

  };

}
