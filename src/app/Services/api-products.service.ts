import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiProductsService {

  allProdUrl="https://fakestoreapi.com/products"
  constructor(private httpClient:HttpClient) {}
  getAllProduct(){
    return this.httpClient.get<any>(this.allProdUrl).pipe(map((res:any)=>{
      return res;
    }))
  }
}
