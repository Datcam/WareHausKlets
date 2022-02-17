import { AuthService } from './../services/auth.service';
import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, DoCheck {

  previousTarget: any;
  isAuth!: boolean;

  constructor(private auth: AuthService, private router: Router) {}

  ngDoCheck(): void {
    this.isAuth = this.auth.isAuth()
  }
  

  ngOnInit(): void {
  }

  addClass(event: any) {
    if (this.previousTarget) {
      this.previousTarget.className = ''
    }
    this.previousTarget = event.target;
    event.target.className = 'active';
  }

  logIn() {
    this.router.navigate(['auth']);
  }

  logOut() {
    this.router.navigate(['games']);
    this.auth.logOut()
  }

}
