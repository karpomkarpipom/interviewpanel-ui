import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

export class User {
  constructor(
    public status: string,
  ) { }

}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private httpClient: HttpClient
  ) {
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

  authenticate(username, password) {
    return this.httpClient.post<any>('http://localhost:8080/api/authenticate',{username,password}).pipe(
     map(
       userData => {
        sessionStorage.setItem('username',username);
        let tokenStr= 'Bearer '+userData.accessToken;
        sessionStorage.setItem('token', tokenStr);
        return userData;
       }
     )

    );
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username')
  }
}