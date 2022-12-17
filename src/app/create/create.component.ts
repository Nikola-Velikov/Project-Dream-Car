import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  constructor(private authService: ApiService,private userService:UserService, private router: Router) {}
  pr:any;
  ngOnInit(): void {
    this.pr = 'profile/'+this.userService.user._id;
  }
  user:any = this.userService.user?._id
  
  create(form: NgForm) {
    if (form.invalid) {
      return;
    }
    let {
      color,
      description,
      imageUrl,
      madeIn,
      model,
      price,
      seats,
      town,
      year,
    } = form.value;
    let owner: any = this.userService.user._id;
    this.authService
      .create(
        color,
        description,
        imageUrl,
        madeIn,
        model,
        price,
        seats,
        town,
        year,
        owner
      )
      .subscribe({
        next: (value) =>  console.log(value),
        error: (err) =>  console.log(err),
      });
  }
}
