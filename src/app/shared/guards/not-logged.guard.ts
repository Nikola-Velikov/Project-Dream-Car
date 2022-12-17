import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/user.service';


@Injectable({
  providedIn: 'root'
})
export class NotloggedGuard implements CanActivate {
  constructor(
    private router: Router, 
    private userService: UserService) { }

canActivate(route: any, state: RouterStateSnapshot){
    if(!this.userService.isLoggedIn()) return true;
    this.router.navigate(['/catalog']);
    return false;
}
  
}