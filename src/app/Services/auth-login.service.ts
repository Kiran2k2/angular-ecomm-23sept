import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthLoginService {
  private loginUrl="https://fakestoreapi.com/auth/login";
  constructor(private loginHttp:HttpClient){ }
  login(username:string,password:string):Observable<any>{
      return this.loginHttp.post(this.loginUrl,{username,password})
  }
 
}
