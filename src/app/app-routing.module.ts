import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGaurdService } from './service/auth-gaurd.service';
import { InterviewPanelComponent } from './interview-panel/interview-panel.component';
import { AddInterviewqaComponent } from './add-interviewqa/add-interviewqa.component';
const routes: Routes = [
  { path:'', component: InterviewPanelComponent,canActivate:[AuthGaurdService]},
  { path: 'addinterviewqa', component: AddInterviewqaComponent,canActivate:[AuthGaurdService]},
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'logout', component: LogoutComponent,canActivate:[AuthGaurdService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
