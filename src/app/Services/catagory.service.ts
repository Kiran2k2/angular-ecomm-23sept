import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatagoryService {
 cataUrl="https://fakestoreapi.com/products/category/"
  constructor(private http:HttpClient) { }

  
getCatagoryProd(catagory:string):Observable<any[]>{
 return this.http.get<any[]>(`${this.cataUrl}${catagory}`)
}



}
