import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  hotels: any | null = null;
  constructor(private api: ApiService,private userService:UserService) {}
  user:any = this.userService.user?._id
  ngOnInit(): void {}
}
