import { AuthService } from '../../services/auth.service';
import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements DoCheck {

  isAuth!: boolean;

  constructor(private auth: AuthService, private router: Router) {}

  ngDoCheck(): void {
    this.isAuth = this.auth.isAuth();
  }

  logIn() {
    this.router.navigate(['auth']);
  }

  logOut() {
    this.router.navigate(['games']);
    this.auth.logOut();
  }
}
