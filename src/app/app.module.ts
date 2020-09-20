import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { BasicAuthHtppInterceptorService } from './service/basic-auth-htpp-interceptor.service';
import { InterviewPanelComponent } from './interview-panel/interview-panel.component';
import { AddInterviewqaComponent } from './add-interviewqa/add-interviewqa.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    InterviewPanelComponent,
    AddInterviewqaComponent,
    AddEmployeeComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    LogoutComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
  {  
    provide:HTTP_INTERCEPTORS, useClass:BasicAuthHtppInterceptorService, multi:true 
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
