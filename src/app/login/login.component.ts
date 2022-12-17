import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  error: boolean | null = null;
  message: string | null = null;

  constructor(private userService: UserService, private router: Router) {}
  user:any = this.userService.user?._id

  handleLogin(form:NgForm){
    this.userService.loginUser(form.value)
    .subscribe({
        next: (response:any)=>{
            if(!response.notErr){

                this.error = true;
                this.message = response.error;
              console.log(response);
              
            }
            else{
                console.log(this.userService.user);
                let token = response.result;
                localStorage.setItem('token', token);
                
             


               



            }
        },
        error: (error)=>{
            console.error(error);
            
            
        }
    })
}
}
