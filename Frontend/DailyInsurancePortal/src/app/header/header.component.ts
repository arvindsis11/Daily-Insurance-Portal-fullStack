import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuardService } from '../config/auth-guard.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isUserLoggedIn:boolean = false;
  constructor(
    private route:Router,public checkUserLogin:AuthGuardService
  ) { }

  ngOnInit(): void {
    this.isUserLoggedIn = this.checkUserLogin.isUerLoggedIn();
    console.log(this.checkUserLogin.isUerLoggedIn());
  }
  logout() {
    localStorage.clear();
    this.route.navigate(['login']);
  }

}
