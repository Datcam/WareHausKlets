import { GAMES, FRIENDS } from './../shared/mock-data';
import { User } from "../shared/models/user.model";
import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable()

export class AuthService {

  constructor(private data: DataService) {}

  isAuth() {
    return this.data.getCurrentUser() ? true : false;
  }

  logIn(user: User) {
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('games', JSON.stringify(GAMES));
    localStorage.setItem('friends', JSON.stringify(FRIENDS));
  }

  logOut() {
    localStorage.clear();
  }
}