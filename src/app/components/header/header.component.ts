import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@services/auth.service';
import { Path } from '@shared/enum-data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements DoCheck {

  isAuth!: boolean;
  path = Path;

  constructor(private auth: AuthService, private router: Router) {}

  ngDoCheck(): void {
    this.isAuth = this.auth.isAuth();
  }

  logIn() {
    this.router.navigate([this.path.AUTH]);
  }

  logOut() {
    this.router.navigate([this.path.GAMES]);
    this.auth.logOut();
  }
}
