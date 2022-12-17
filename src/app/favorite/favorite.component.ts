import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
})
export class FavoriteComponent implements OnInit {
  id: string | null = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private authService: ApiService,
    private userService: UserService,

    private router: Router
  ) {}
  ngOnInit(): void {
    let offer: any;
  
    this.id = this.activatedRoute.snapshot.params?.['id'];
    this.authService
      .getDetails(this.activatedRoute.snapshot.params?.['id'])
      .subscribe({
        next: (car) => {
          if(car.owner!=this.userService.user._id){
            if(car.favorited.includes(this.userService.user._id)){
          this.router.navigate(['/catalog']);
              
            }else{

            
          this.authService
            .favorite(car._id, this.userService.user._id)
            .subscribe({
              next: (value) => {
              
              },
            
            });
            
          this.router.navigate(['/catalog']);
            }
        }else{
          this.router.navigate(['/catalog']);
        }},
      });
  }
}
