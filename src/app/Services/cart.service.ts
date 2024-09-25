import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CartItem, NEWCART } from '../Model/cart.model';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems:NEWCART[]=[]
  public productLists=new BehaviorSubject<any>([]);
  public cartTotalPrice=new BehaviorSubject<number>(0);
  public cartTotalQuantity=new BehaviorSubject<number>(0);

  constructor(private httpService:HttpClient) { }
  getProduct(){
    return this.productLists.asObservable()
  }
  getCartTotalPrice():Observable<number>{
    return this.cartTotalPrice.asObservable()
  }
 
  getTotalCartQuantity():Observable<number>{
    return this.cartTotalQuantity.asObservable()
  }




  addToCart(product:CartItem){
//     this.cartItems.push(product)
//     console.log(this.cartItems);
// this.updateCartTotals()
console.log(product);

    const presentProduct=this.cartItems.findIndex((item)=>
      item.id ===product.id)
    console.log(presentProduct);
    
    
    if(presentProduct >=0){
      console.log(this.cartItems);
      
    this.cartItems[presentProduct].quantity +=1;
    this.cartItems=[...this.cartItems]
    }
    else{
      // let {}
      let obj ={
       ...product,quantity:1
      }
    this.cartItems.push(obj)
    
    
    }
this.updateCartTotals()
  }
 getCartItem(){
  return this.cartItems
 }

 getCartItemNo(){
   return this.cartItems.length
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
 

  totalPrice() :number{
   
    console.log(this.cartItems);
    
   return this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  
    
  }
  private updateCartTotals() {
    const totalQuantity = this.cartItems.reduce((total, item) => total + item.quantity, 0);
    
    const totalPrice = this.totalPrice();
    
    this.cartTotalQuantity.next(totalQuantity);
    this.cartTotalPrice.next(totalPrice);
  }


  

}








