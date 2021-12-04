import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  loginUser(user:any){
    console.log(user);
    return this.http.post("http://localhost:5000/login",user)
  }

  signupUser(user:any){
    console.log(user);
    
    return this.http.post("http://localhost:5000/signup",user)
  }

  userLoggedIn()
  {
    return !!localStorage.getItem('usertoken')
  }

  adminLoggedIn()
  {
    return !!localStorage.getItem('admintoken')
  }

  getUserToken()
  {
    return localStorage.getItem('usertoken')
  }

  getAdminToken()
  {
    return localStorage.getItem('admintoken')
  }

}
