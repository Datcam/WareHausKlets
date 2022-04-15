import { Injectable } from '@angular/core';
import { DataService } from '@services/data.service';
import { User } from "@models/user.model";
import { GAMES, FRIENDS } from '@shared/mock-data';

@Injectable()

export class AuthService {

  constructor(private data: DataService) {}

  isAuth() {
    return this.data.getCurrentUser() ? true : false;
  }

  logIn(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('games', JSON.stringify(GAMES));
    localStorage.setItem('friends', JSON.stringify(FRIENDS));
  }

  logOut() {
    localStorage.clear();
  }
}
