import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGaurdService } from './service/auth-gaurd.service';
import { InterviewPanelComponent } from './interview-panel/interview-panel.component';
import { EmailSettingsComponent } from './settings/emailsettings/emailsettings.component';
import { ProfileSettingsComponent } from './settings/profilesettings/profilesettings.component';
import { AddInterviewqaComponent } from './add-interviewqa/add-interviewqa.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ContactusComponent } from './contactus/contactus.component';
const routes: Routes = [
  { path:'', component: InterviewPanelComponent,canActivate:[AuthGaurdService]},
  { path: 'addinterviewqa', component: AddInterviewqaComponent,canActivate:[AuthGaurdService]},
  { path: 'login', component: LoginComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'emailsettings', component: EmailSettingsComponent },
  { path: 'profilesettings', component: ProfileSettingsComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'logout', component: LogoutComponent,canActivate:[AuthGaurdService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
