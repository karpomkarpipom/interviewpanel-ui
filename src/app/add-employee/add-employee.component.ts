import { Component, OnInit } from '@angular/core';
import { InterviewPanelServiceService,InterviewQuestionAnswer } from '../service/interview-panel-service.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

 
  user: InterviewQuestionAnswer = new InterviewQuestionAnswer("","",[],"");


  constructor( private interviewPanelService:InterviewPanelServiceService) {

 

   }
  ngOnInit() {
  }

  createInterviewQA(): void {
    this.interviewPanelService.createInterviewQA(this.user)
        .subscribe( data => {
          alert("Employee created successfully.");
        });

  };

}