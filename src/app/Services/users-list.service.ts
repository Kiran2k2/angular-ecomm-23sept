import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersListService {
  usersUrl="https://fakestoreapi.com/users"

  constructor(private usersHttp:HttpClient) { }

  getUsers(){
    return this.usersHttp.get<any>(this.usersUrl).pipe(map((res:any)=>{
      return res;

    }))

  }
}
