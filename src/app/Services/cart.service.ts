import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  private cartItems:any=[]
  public productLists=new BehaviorSubject<any>([]);







  constructor(private httpService:HttpClient) { }
  getProduct(){
    return this.productLists.asObservable()
  }


setProduct(product:any){
  this.cartItems.push(...product);
  this.productLists.next(product)
}


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
   this.cartItems=[];
   this.productLists.next(this.cartItems);

  }


  totalPrice():number{
    let grandTotal=0;
    this.cartItems.map((a:any)=>{
      grandTotal +=a.total
    });
    return grandTotal
  }

}
