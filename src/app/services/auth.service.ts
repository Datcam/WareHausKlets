import { User } from "../models/user.model";

export class AuthService {

  currentUser!: User;
  isLoggedIn = false;
  email!: string
  
  getEmail(){
    return this.email
  }
  setEmail(email:string){
    this.email = email
  }

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