import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { ProductsComponent } from './layouts/products/products.component';
// import { LayoutsComponent } from './layouts/layouts.component';
import { ProductComponent } from './layouts/product/product.component';
import { CartComponent } from './layouts/cart/cart.component';
import { CatagoriesComponent } from './layouts/catagories/catagories.component';
import { MenDataComponent } from './layouts/catagories/men-data/men-data.component';
import { ElectronicsComponent } from './layouts/catagories/electronics/electronics.component';

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
 },{
   path:"productss/:catagory",
   component:MenDataComponent
 },
{
   path:'**',
   component:ElectronicsComponent
}


];
