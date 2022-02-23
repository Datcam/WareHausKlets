import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { User } from '../../shared/models/user.model';
import { USERS } from '../../shared/mock-data';
import { Path, UserObjectProperty } from 'src/app/shared/enum-data';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})

export class LoginPageComponent implements OnInit {

  MIN_PASSWORD_LENGTH: number = 5;
  public form!: FormGroup;
  arr: User[] = USERS;
  check!: boolean;
  noncheck: boolean = false;
  path = Path;
  userProperty = UserObjectProperty;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(this.MIN_PASSWORD_LENGTH)])
    });
  }

  onSubmit() {
    this.arr.map((value) => {
      if (this.form.get(this.userProperty.EMAIL)?.value === value.email &&
        this.form.get(this.userProperty.PASSWORD)?.value === value.password) {
        this.check = true;
        this.noncheck = false;
        this.auth.logIn(value);
        this.router.navigate([this.path.PROFILE]);
      }
      else {
        this.noncheck = true;
      }
    })
  }
}


