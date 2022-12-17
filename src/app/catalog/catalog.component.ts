import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from '../api.service';
import { offer } from '../shared/interfaces';
import { UserService } from '../user.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class CatalogComponent implements OnInit {
  offer: offer[] | null = null;

  constructor(private authService: ApiService,private userService: UserService, private router: Router) {}
  user:any = this.userService.user?._id
  
  ngOnInit(): void {
    this.authService.getOffers().subscribe({
      next: (value) => {
        this.offer = value;
;

        for (const line of this.offer) {
        
         
          
        if(line.favorited.includes(this.userService.user._id)){
          console.log(this.userService.user._id);
          
          line.owner = 'true'
        }else{
          line.owner = 'false'

        }
          line._id = '/details/' + line._id;
        }
      },
    });
  }
}
