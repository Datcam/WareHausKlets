import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { USERS } from '../../shared/mock-data';
import { User } from '../../shared/models/user.model';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})

export class LoginPageComponent implements OnInit {

  public form!: FormGroup;
  arr: User[] = USERS;
  check!: boolean;
  noncheck: boolean = false;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    });
  }
  
  onSubmit() {
    this.arr.map((value) => {
      if (this.form.get('email')?.value === value.email && this.form.get('password')?.value === value.password) {
        this.check = true;
        this.noncheck = false;
        this.auth.logIn(value);
        this.router.navigate(['profile']);
      }
      else {
        this.noncheck = true;
      }
    })
  }
}


