import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { offer } from '../shared/interfaces';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  offer!: any[];
  user:any = this.userService.user ;

constructor( private router: Router,private userService:UserService,private activatedRoute: ActivatedRoute,) {}
userNav:any = this.userService.user?._id
  
ngOnInit(): void {
   this.userService.getFavorites().subscribe({
    next:(value:any)=>{

       this.offer = value;
      
console.log(this.offer);
    
  
        for (const line of this.offer) {
        if(  line.favorited.includes(this.userService.user._id)){
          line.owner = 'true'
        }else{
          line.owner = 'false'

        }
          line._id = '/details/' + line._id;
        }
    }
   })
 
 
  }
  
}
