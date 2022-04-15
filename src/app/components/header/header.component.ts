import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@services/auth.service';
import { Path } from '@shared/enum-data';
import { EventBusService } from "@services/event-bus.service";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements DoCheck, OnInit {

  isAuth!: boolean;
  path = Path;
  userName: Object | undefined;
  name: Object = '';
  rawName: Object = '';
  user = '';

  constructor(private auth: AuthService, private router: Router, public eventBus: EventBusService, public http: HttpClient) {}

  ngOnInit(): void {

  }

  ngDoCheck(): void {
    this.isAuth = this.auth.isAuth();
  }

  logIn() {
    this.router.navigate([this.path.AUTH]);
  }

  logOut() {
    this.router.navigate([this.path.MAIN]);
    this.auth.logOut();
  }
}
