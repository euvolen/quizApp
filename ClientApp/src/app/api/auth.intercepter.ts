import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';

@Injectable()
export class AuthIntercepter implements HttpInterceptor {

  
intercept(req, next){

  let token = localStorage.getItem("token")

  let authReq = req.clone({
    headers:req.headers.set('Authorization',`Bearer ${token}`)
  })
  return next.handle(authReq)
}

  constructor() { }
}
