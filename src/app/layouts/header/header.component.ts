import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../../Services/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{


 totalItem:number= 0
 constructor(private cartService:CartService){

 }

ngOnInit(): void {
this.updateCartCout()
  
 
}
updateCartCout(){
 this.totalItem=this.cartService.getCartItemNo()
 console.log(this.totalItem);
}












  logoutBtn(){
    
  }
}
