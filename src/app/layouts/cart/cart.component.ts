import { Component, OnInit } from '@angular/core';
import { CartService } from '../../Services/cart.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  public cart: any = [];
  constructor(private getCart:CartService){
}
  ngOnInit(): void {
   this.cart= this.getCart.getCartItem()
   console.log(this.cart);
  }

removeProduct(productId:number){
  this.getCart.removeItemCart(productId)
  // console.log(productId);
  this.cart=this.getCart.getCartItem()
  // console.log(this.cart);
}







deleteApi(productId:number){
  this.getCart.deleteCartItem(productId).subscribe(()=>{
    this.removeProduct(productId)
console.log(productId);

  })
 
  
}


}
