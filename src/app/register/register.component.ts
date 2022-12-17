import { Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ApiService } from '../api.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  users!: any[];

  


  constructor(private userService: UserService, private router: Router) {

  }
  user:any = this.userService.user?._id


  
  

 
  
  handleSubmit(form:NgForm) {
    let formValue: any = {
      
      password: form.value.password!,
      email: form.value.email!,
   
    };
    console.log(formValue);
    this.userService.createUser(formValue)
      .subscribe({
        next: (response:any) => {
          if (response.notErr) {
     this.router.navigate(['/login'])
          
          }
        },
       
      })

  }



}