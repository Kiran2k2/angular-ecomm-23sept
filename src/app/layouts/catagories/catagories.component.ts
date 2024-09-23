import { Component, inject } from '@angular/core';
import { CatagoryService } from '../../Services/catagory.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-catagories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './catagories.component.html',
  styleUrl: './catagories.component.css'
})
export class CatagoriesComponent {

  catagoryProd:any[]=[]
   constructor( private catagory:CatagoryService){

   }
 

   getProdByCatag(){
   
   }


}
