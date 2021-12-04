import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit {

  user={
    username :'',
    email  : '',
    password :'',
    phoneno  :''
}
   

  constructor(private router:Router,private auth:AuthService) { }

  ngOnInit(): void {
  }
  userSignUp(){
    console.log(this.user)
    this.auth.signupUser(this.user)
    .subscribe(
      (res)=>{
        alert("signup success")
        this.router.navigate(['/login/user-login']);
      },
      (err)=>{
        alert("sigup failed")
        this.router.navigate(['/login/user-login'])

      }
    )
  }

}
