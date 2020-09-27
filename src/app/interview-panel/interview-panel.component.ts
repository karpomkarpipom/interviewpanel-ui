import {Component, OnInit,Input,ViewChild} from '@angular/core';
import { MatTableDataSource,MatPaginator,MatSort } from '@angular/material';
import { InterviewPanelServiceService,InterviewQuestionAnswer } from '../service/interview-panel-service.service';
/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-interview-panel',
  templateUrl: './interview-panel.component.html',
  styleUrls: ['./interview-panel.component.css'],
 
})
export class InterviewPanelComponent implements OnInit {

  displayedColumns: string[] = ['employerName', 'technology', 'questionAsked', 'givenAnswer','interviewDate','questionPostedBy'];
  @Input('ELEMENT_DATA')  ELEMENT_DATA!:  InterviewQuestionAnswer[];
  dataSource = new MatTableDataSource<InterviewQuestionAnswer>(this.ELEMENT_DATA);
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor( private interviewPanelService:InterviewPanelServiceService) { }
  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
   this.getInterviewQAList();
}

public getInterviewQAList(){
  let response= this.interviewPanelService.getInterviewQAList()
  response.subscribe(report =>this.dataSource.data=report as InterviewQuestionAnswer[]);
}

applyFilter(filterValue:String){
   
  this.dataSource.filter=filterValue.trim().toLowerCase();
}



// deleteEmployee(interviewQuestionAnswer: InterviewQuestionAnswer): void { 
//     this.interviewPanelService.deleteInterviewQA(interviewQuestionAnswer)
//       .subscribe( data => {
//         this.interviewQuestionAnswers = this.interviewQuestionAnswers.filter(u => u !== interviewQuestionAnswer);
//       })
//   };

}