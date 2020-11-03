import { Component, OnInit } from '@angular/core';
import { InterviewPanelServiceService,InterviewQuestionAnswer,Qas } from '../service/interview-panel-service.service';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray, NgForm } from '@angular/forms'

@Component({
  selector: 'app-add-interviewqa',
  templateUrl: './add-interviewqa.component.html',
  styleUrls: ['./add-interviewqa.component.css']
})
export class AddInterviewqaComponent  {
  name = 'Angular';
  private QaArray: Array<Qas> = [];
  interviewQuestionAnswer: InterviewQuestionAnswer = new InterviewQuestionAnswer("","",this.QaArray,"","");

  productForm: FormGroup;
  submitted = false;

  constructor(private fb:FormBuilder,private interviewPanelService:InterviewPanelServiceService) {
    this.productForm = this.fb.group({
      questionAnswers: this.fb.array([]) ,
      employerName: ['', Validators.required],
      contact: ['', [Validators.required]],
      interviewDate: ['', [Validators.required]],
      questionPostedBy: ['', Validators.required],
      experiencelevel:['', Validators.required]
    });
  }

  ngOnInit() {
    this.questionAnswers().push(this.newQuantity());
  }
  
  questionAnswers() : FormArray {
    return this.productForm.get("questionAnswers") as FormArray
  }
   
  newQuantity(): FormGroup {
    return this.fb.group({
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
   
  onSubmit() {
   // console.log(this.productForm.value);
  }

  createInterviewQA(): void {
    this.submitted = true;
    if (this.productForm.invalid) {
      return;
  }

    this.interviewPanelService.createInterviewQA(this.productForm.value)
        .subscribe( data => {
          alert("Interview Question Answer stored successfully.");
        });

  };


      // convenience getter for easy access to form fields
      get f() { return this.productForm.controls; }

}
