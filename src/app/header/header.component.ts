import { AuthService } from './../services/auth.service';
import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, DoCheck {

  profile: boolean = true;
  games: boolean = false;
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
    if (event === 'games') {
      this.games = true;
    } else {
      this.games = false;
      event.target.className = 'active';
    }
    this.profile = false;
    this.previousTarget = event.target;
  }

  goToGamesPage() {
    if (this.previousTarget) {
      this.previousTarget.className = ''
    }
    this.profile = false;
    this.games = true;
  }

  logIn() {
    this.router.navigate(['auth']);
  }

  logOut() {
    this.router.navigate(['games']);
    this.auth.logOut()
    this.profile = true;
    this.games = false;
  }

}
