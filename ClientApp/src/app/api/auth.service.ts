import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable()
export class AuthService{

    constructor(private http: HttpClient, private router: Router){

    }

    registerUser(user){
        this.http.post("/api/account", user,{responseType: "text"}).subscribe(res => {
                     
            this.autenticate(res)
        })
    }

    get isAuthenticated(){
        return !!localStorage.getItem('token')
    }

    loginUser(user){
        this.http.post("/api/account/login", user,{responseType: "text"}).subscribe(res => {
               
            this.autenticate(res)
        })
    }

    autenticate(res){

        localStorage.setItem('token', res)
        this.router.navigate(['/'])
    }

    logout(){
        
        localStorage.removeItem('token')
        this.router.navigate(['/login'])
    }
  
}