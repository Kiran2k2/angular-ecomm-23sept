import { Component, inject, viewChild } from '@angular/core';
import { AuthLoginService } from '../../Services/auth-login.service';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  private loginForm=viewChild<NgForm>('loginForm')
  constructor(private authService:AuthLoginService){

   
  }
  router=inject(Router)

onSubmitLogin(formData:NgForm){
  // console.log(formData.value);
  

if(formData.valid){
    const {username,password}=formData.value;
    console.log(username,password);

    this.authService.login(username,password).subscribe({next:(resp)=>{
      
      console.log(username,password);
      console.log('Login successfully',resp);

      const token= resp.token;
      localStorage.setItem('auth token',token);
      this.router.navigateByUrl('/products')
      formData.form.reset()
    },
    error:(error)=>{
      console.log('login Failed',error);
    }
  
  
  })
  }




}
}