import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

export class User {
  constructor(
    public status: string,
  ) { }

  id:string;
  email:string;
  password:string;
  firstName:string;
  lastName:string;
  active:number;
  isLoacked:boolean;
  isExpired:false;
  isEnabled:true;
  role:Set<Role>;
}
export class Role{
id:number;
role:string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  isadmin:boolean;
 
  constructor(
    private httpClient: HttpClient
  ) {
     
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  // authenticate(username, password) {
  //   console.log(username);
  //   console.log(password);
  //   const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
  //   return this.httpClient.get<User>('http://18.188.63.1:8080/employees/validateLogin', { headers }).pipe(
  //     map(
  //       userData => {
  //         sessionStorage.setItem('username', username);
  //         let authString = 'Basic ' + btoa(username + ':' + password);
  //         sessionStorage.setItem('basicauth', authString);
  //         return userData;
  //       }
  //     )

  //   );
  // }

  authenticate(email, password) {
    return this.httpClient.post<any>('http://6929b472d968.ngrok.io/api/authenticate',{email,password}).pipe(
     map(
       userData => {
        sessionStorage.setItem('email',email);
 

        this.currentUserSubject.next(userData);
        let tokenStr= 'Bearer '+userData.accessToken;
     
        sessionStorage.setItem('token', tokenStr);
        return userData;
       }
     )

    );
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('email')
    console.log(!(user === null))
    return !(user === null)
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }
  isAdmin() {
    
    let jwtData = sessionStorage.getItem('token').split('.')[1]
    let decodedJwtJsonData = window.atob(jwtData)
    let decodedJwtData = JSON.parse(decodedJwtJsonData)
    
    this.isadmin = decodedJwtData.isAdmin
    console.log('jwtData: ' + jwtData)
    console.log('decodedJwtJsonData: ' + decodedJwtJsonData)
    console.log('decodedJwtData: ' + decodedJwtData)
    console.log('Is admin: ' + this.isadmin)
    console.log('Admin service --- > > > '+(this.isadmin));
    return this.isadmin;
}
  logOut() {
     // remove user from local storage to log user out
     localStorage.removeItem('currentUser');
     this.currentUserSubject.next(null);
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('token');
  }
}