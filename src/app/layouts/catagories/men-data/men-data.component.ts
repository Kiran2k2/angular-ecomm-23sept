import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../header/header.component";
import { CatagoriesComponent } from '../catagories.component';
import { CatagoryService } from '../../../Services/catagory.service';
import { ActivatedRoute } from '@angular/router';
import { catchError } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-men-data',
  standalone: true,
  imports: [HeaderComponent,CommonModule],
  templateUrl: './men-data.component.html',
  styleUrl: './men-data.component.css'
})
export class MenDataComponent implements OnInit {

products:any[]=[];
// catagory:string | null=null
constructor(private catService:CatagoryService,
  private routee:ActivatedRoute
){

}

ngOnInit() {
  console.log("hello");
  
  this.routee.params.subscribe({
    next:params => {
      this.getCata(params['catagory']);
      }
  });
 
  }


  getCata(cata:string){
    
    this.catService.getCatagoryProd(cata).pipe(catchError(error=>{
      console.log(error);
      return[]
    })).subscribe(res=>{
      this.products=res
      console.log(this.products);
    })
}











}


// this.routee.paramMap.subscribe((parm:any)=>{
  //   this.catagory=parm['Catagory'] || null
  // })
  // if(this.catagory){
  //   this.catService.getCatagoryProd(this.catagory)
  