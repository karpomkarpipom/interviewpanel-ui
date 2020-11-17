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
    public qId:string
    public technology:string
    public questionAsked:string
    givenAnswers:GivenAnswers[]
   
 
}

export class GivenAnswers{

public answer:string
}

@Injectable({
  providedIn: 'root'
})
export class InterviewPanelServiceService {

  constructor(private httpClient:HttpClient) { }

  getInterviewQAList()
  {
    console.log("test call");
       return this.httpClient.get<InterviewQuestionAnswer[]>('http://6929b472d968.ngrok.io/api/interviewpanel/qa/v1/qalist');
  }

  public deleteInterviewQA(interviewQuestionAnswer) {

    return this.httpClient.delete<InterviewQuestionAnswer>("http://6929b472d968.ngrok.io/api/interviewpanel/qa/v1/delete" + "/"+ interviewQuestionAnswer._id);
  }

  public createInterviewQA(interviewQuestionAnswer) {
    return this.httpClient.post<InterviewQuestionAnswer>("http://6929b472d968.ngrok.io/api/interviewpanel/qa/v1/addQA", interviewQuestionAnswer);
  }

  public updateAnswer(interviewQuestionAnswer) {
    return this.httpClient.put<InterviewQuestionAnswer>("http://6929b472d968.ngrok.io/api/interviewpanel/qa/v1/modify", interviewQuestionAnswer);
  }

  public createUser(user) {
    return this.httpClient.post<User>("http://6929b472d968.ngrok.io/api/interviewpanel/user/v1/signup", user);
  }
}


