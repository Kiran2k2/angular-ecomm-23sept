import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  private cartItems:any=[]
  constructor(private httpService:HttpClient) { }
  addToCart(product:any){

  this.cartItems.push(product)
  }
 getCartItem(){
  return this.cartItems
 }

 removeItemCart(productId:number){
  this.cartItems=this.cartItems.filter((item:any)=>
    item.id!== productId)
  console.log(this.cartItems);
 }
  deleteCartItem(productId:number):Observable<any>{
      
    return this.httpService.delete(`https://fakestoreapi.com/products/${productId}`)


  }

  removeAllCart(){
   this.cartItems=[]
  }


}
