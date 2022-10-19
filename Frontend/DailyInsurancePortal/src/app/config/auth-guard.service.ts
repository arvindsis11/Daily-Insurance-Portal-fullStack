import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor() { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(this.isUerLoggedIn())
    return true;
    else
    return false;
  }

  isUerLoggedIn(){
    let checkLogin = localStorage.getItem('token');
    if(checkLogin!=null){
      return true;
    }
    else
    {
      return false;
    }
  }
  
}
