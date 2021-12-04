import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  user={
    uname:'',
    password:''
  }
  constructor(private authservice:AuthService,private router:Router) { }

  ngOnInit(): void {
  }

  userLogin(){
    console.log(this.user);
    
    this.authservice.loginUser(this.user)
    .subscribe(
      (res:any)=>{
        if(res.role=="admin"){
          localStorage.setItem('admintoken', res.token)
          this.router.navigate(['/books']);
        }else{
          localStorage.setItem('usertoken', res.token)
          this.router.navigate(['/books']);
        }
        
     
      },
      (err:any)=>{
        console.log(err);
        alert(err.error);
        
      }

    )
    



  }

}
