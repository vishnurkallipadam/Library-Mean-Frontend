import { Injectable } from '@angular/core';
import {CanActivate,Router} from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserguardGuard implements CanActivate {

  constructor(private authservice:AuthService,private router:Router){}
  canActivate():boolean{
    let a = false
    if (this.authservice.userLoggedIn())
    {
      a=true
    }
    if (this.authservice.adminLoggedIn())
    {
      a=true
    }

    if(a=true){
      return true;
    }
    else{
      this.router.navigate(['/login'])
      return false
    }

  }
  
}
