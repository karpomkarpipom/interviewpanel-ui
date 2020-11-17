import {Component, OnInit,Input,ViewChild} from '@angular/core';
import { MatTableDataSource,MatPaginator,MatSort } from '@angular/material';
import { InterviewPanelServiceService,InterviewQuestionAnswer } from '../service/interview-panel-service.service';
import { AuthenticationService  } from '../service/authentication.service';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray, NgForm } from '@angular/forms'
import { Router } from '@angular/router';
/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-interview-panel',
  templateUrl: './interview-panel.component.html',
  styleUrls: ['./interview-panel.component.css'],
 
})
export class InterviewPanelComponent implements OnInit {

  displayedColumns: string[] = ['employerName','interviewDate','questionAnswers','experiencelevel', 'questionPostedBy','action'];
  @Input('ELEMENT_DATA')  ELEMENT_DATA!:  InterviewQuestionAnswer[];
  dataSource = new MatTableDataSource<InterviewQuestionAnswer>(this.ELEMENT_DATA);
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  productForm: FormGroup;
  isAdmin:boolean;
  constructor(private fb:FormBuilder, private interviewPanelService:InterviewPanelServiceService,private router: Router,private authenticationService:AuthenticationService) { 
  
   }


  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
   this.getInterviewQAList();
   this.isAdmin=this.authenticationService.isAdmin();
   console.log('Interviewservice -->  > > '+this.isAdmin);
}

public getInterviewQAList(){
  let response= this.interviewPanelService.getInterviewQAList()
  response.subscribe(report =>this.dataSource.data=report as InterviewQuestionAnswer[]);
}

applyFilter(filterValue:String){
   
  this.dataSource.filter=filterValue.trim().toLowerCase();
}

edit(element): void {
  //alert(element.employerName);
  this.interviewPanelService.updateAnswer(element)
      .subscribe( data => {
        alert("Interview Answer updated successfully.");
        this.getInterviewQAList();
      });

};

delete(element): void {
  //alert(element.employerName);
  this.interviewPanelService.deleteInterviewQA(element)
      .subscribe( data => {
        alert("Interview Answer deleted successfully.");
       },  err => {
       // alert(err.status);
        if(err.status==200)
        {
          alert("Interview Answer deleted successfully.");
          this.getInterviewQAList();
         ;
        }
                     
        });

};  
 

questionAnswers() : FormArray {
  return this.productForm.get("questionAnswers") as FormArray
}
 
newQuantity(): FormGroup {
  return this.fb.group({
    qId:'',
    technology: '',
    questionAsked: '',
    givenAnswer: '',
 
  })
}

addQuestionAnswers() {
  this.questionAnswers().push(this.newQuantity());
}
 
removeQuestionAnswers(i:number) {
  this.questionAnswers().removeAt(i);
}

}