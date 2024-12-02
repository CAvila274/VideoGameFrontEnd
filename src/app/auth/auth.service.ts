import { Injectable } from '@angular/core';
import { LoginRequest } from './login-request';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { LoginResponse } from './login-response';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  private _authStatus = new BehaviorSubject<boolean> (false);
  public authStatus = this._authStatus.asObservable();
  private isAuthenticated() : boolean{
    return localStorage.getItem("coinvalue") != null;
  }

  getToken(): string | null{
    return localStorage.getItem("coinvalue")
  }

  private setAuthStatus(isAuthenticated : boolean) :void {
    this._authStatus.next(isAuthenticated);
  }


  login(loginRequest: LoginRequest): Observable<LoginResponse>
  {
    return this.http.post<LoginResponse>(`${environment.baseUrl}api/Admin/Login`, loginRequest)
    .pipe(tap(loginResult => {
      if(loginResult.success){
        localStorage.setItem("coinvalue", loginResult.token);
        this.setAuthStatus(true);
      }
    }));
  }
  logout(){
    localStorage.removeItem("coinvalue");
    this.setAuthStatus(false);
  }
}