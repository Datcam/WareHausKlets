import { User } from "../shared/models/user.model";

export class AuthService {

  currentUser!: User;
  isLoggedIn = false;

  setCurrentUser(user: User) {
    this.currentUser = user;
  }

  getCurrentUser() {
    return this.currentUser
  }

  isAuth() {

    return this.isLoggedIn
  }

  logIn() {
    this.isLoggedIn = true;
  }

  logOut() {
    this.isLoggedIn = false;
  }
}