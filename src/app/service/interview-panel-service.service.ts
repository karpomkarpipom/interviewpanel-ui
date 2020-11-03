import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class InterviewQuestionAnswer{
  constructor(
    public questionPostedBy:string,
    public employerName:string,
    Qas:  Qas[],
    public interviewDate:string,
    public experiencelevel:string
  ) {}
}

export class User{
  constructor(
    public firstName:string,
    public lastName:string,
    public email:string,
    public password:string,
   
  ) {}
}

export class Qas{
  
    public technology:string
    public questionAsked:string
    public givenAnswer:string
   
 
}

@Injectable({
  providedIn: 'root'
})
export class InterviewPanelServiceService {

  constructor(private httpClient:HttpClient) { }

  getInterviewQAList()
  {
    console.log("test call");
       return this.httpClient.get<InterviewQuestionAnswer[]>('http://localhost:8080/api/interviewpanel/qa/v1/qalist');
  }

  public deleteInterviewQA(interviewQuestionAnswer) {

    return this.httpClient.delete<InterviewQuestionAnswer>("http://localhost:8080/api/interviewpanel" + "/"+ interviewQuestionAnswer.qid);
  }

  public createInterviewQA(interviewQuestionAnswer) {
    return this.httpClient.post<InterviewQuestionAnswer>("http://localhost:8080/api/interviewpanel/qa/v1/addQA", interviewQuestionAnswer);
  }

  public createUser(user) {
    return this.httpClient.post<User>("http://localhost:8080/api/interviewpanel/user/signup", user);
  }
}


