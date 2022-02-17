export class AuthService {
  isLoggedIn = false;
  email!: string
  getEmail(){
    return this.email
  }
  setEmail(email:string){
    this.email = email
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