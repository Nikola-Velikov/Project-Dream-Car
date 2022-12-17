import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  user:any = this.userService.user?._id

  id: string | null = null;
  car: any | null = null;
  del: string | null = null;
  fav: string | null = null;
  owner: string | null = null;
  isFav: boolean | null = null;

  logged: any = this.userService.user._id;

  constructor(
    private activatedRoute: ActivatedRoute,
    private authService: ApiService,
    private userService: UserService

  ) {}
  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params?.['id'];
    this.authService
      .getDetails(this.activatedRoute.snapshot.params?.['id'])
      .subscribe({
        next: (value) => {
          
          this.del = '/delete/' + value._id;
          this.fav = '/favorite/' + value._id;
          value._id = '/edit/' + value._id;
          this.owner = value.owner;
          this.car = value;
          
          
          if(value.favorited.includes(this.userService.user._id)){
        
            
            this.isFav=true
          }
        },
      });
  }
}
