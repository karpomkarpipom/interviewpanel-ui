import { Component, OnInit } from '@angular/core';
import { InterviewPanelServiceService,InterviewQuestionAnswer } from '../service/interview-panel-service.service';

@Component({
  selector: 'app-interview-panel',
  templateUrl: './interview-panel.component.html',
  styleUrls: ['./interview-panel.component.css'],
 
})
export class InterviewPanelComponent implements OnInit {
  interviewQuestionAnswers:InterviewQuestionAnswer[];
  constructor( private interviewPanelService:InterviewPanelServiceService) { }

  ngOnInit() {
    this.interviewPanelService.getInterviewQAList().subscribe(
     response =>{this.interviewQuestionAnswers = response;}
    );
  }
  deleteEmployee(interviewQuestionAnswer: InterviewQuestionAnswer): void { 
    this.interviewPanelService.deleteInterviewQA(interviewQuestionAnswer)
      .subscribe( data => {
        this.interviewQuestionAnswers = this.interviewQuestionAnswers.filter(u => u !== interviewQuestionAnswer);
      })
  };
}
