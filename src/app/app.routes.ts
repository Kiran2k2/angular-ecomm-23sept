import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { ProductsComponent } from './layouts/products/products.component';
// import { LayoutsComponent } from './layouts/layouts.component';
import { ProductComponent } from './layouts/product/product.component';
import { CartComponent } from './layouts/cart/cart.component';

export const routes: Routes = [{
    path:'',
    redirectTo:"login",
    pathMatch:'full'
},
{
    path:'login',
    component:LoginComponent
},
 {
    path:'',
    component:ProductsComponent,
    
 },{
    path:'products',
    component:ProductsComponent,
 },
 {
    path:'product/:id',
    component:ProductComponent
 },
 {
   path:'cartList',
   component:CartComponent
 }



];
