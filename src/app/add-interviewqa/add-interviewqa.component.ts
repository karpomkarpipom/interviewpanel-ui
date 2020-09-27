import { Component, OnInit } from '@angular/core';
import { InterviewPanelServiceService,InterviewQuestionAnswer } from '../service/interview-panel-service.service';

@Component({
  selector: 'app-add-interviewqa',
  templateUrl: './add-interviewqa.component.html',
  styleUrls: ['./add-interviewqa.component.css']
})
export class AddInterviewqaComponent implements OnInit {

  interviewQuestionAnswer: InterviewQuestionAnswer = new InterviewQuestionAnswer("","","","","","");

  Technologies: any = ['Angular','DevOps','Java', 'Microservice', 'MongoDB','Networking','Others']
  constructor( private interviewPanelService:InterviewPanelServiceService) {

 

   }

  ngOnInit(): void {
  }


  createInterviewQA(): void {
    this.interviewPanelService.createInterviewQA(this.interviewQuestionAnswer)
        .subscribe( data => {
          alert("Interview Question Answer stored successfully.");
        });

  };

  private fieldArray: Array<any> = [];
private newAttribute: any = {};
addFieldValue() {
  this.fieldArray.push(this.newAttribute)
  this.newAttribute = {};
}

deleteFieldValue(index) {
  this.fieldArray.splice(index, 1);
}

}
