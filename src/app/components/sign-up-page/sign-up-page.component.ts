import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@services/auth.service';
import { User } from '@models/user.model';
import { USERS } from '@shared/mock-data';
import { Path, UserObjectProperty } from '@shared/enum-data';
import { NotificationService } from "@services/notification.service";
import { Message } from "@shared/enum-data";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css']
})

export class SignUpPageComponent implements OnInit {

  MIN_PASSWORD_LENGTH: number = 5;
  public form!: FormGroup;
  arr: User[] = USERS;
  check!: boolean;
  noncheck: boolean = false;
  path = Path;
  userProperty = UserObjectProperty;
  error = false;
  message = Message;

  constructor(private auth: AuthService, private router: Router, public notification: NotificationService, public http: HttpClient) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(this.MIN_PASSWORD_LENGTH)]),
      confirm_password: new FormControl(null, [Validators.required, Validators.minLength(this.MIN_PASSWORD_LENGTH)])
    });
  }

  onSubmit() {
    console.log('1')
    if (this.form.get(this.userProperty.EMAIL)?.value &&
      (this.form.get(this.userProperty.PASSWORD)?.value &&
        this.form.get(this.userProperty.CONFIRM_PASSWORD)?.value)) {
      console.log(2)
      if (this.form.get(this.userProperty.PASSWORD)?.value ===
        this.form.get(this.userProperty.CONFIRM_PASSWORD)?.value) {
        console.log('3')
        this.error = false;
        this.check = true;
        this.noncheck = false;
        this.auth.logIn({
          email: this.form.get(this.userProperty.EMAIL)?.value,
          password: this.form.get(this.userProperty.PASSWORD)?.value}
        );

        this.http.post<any>('http://localhost:3000/user_list', {
          email: this.form.get(this.userProperty.EMAIL)?.value,
          password: this.form.get(this.userProperty.PASSWORD)?.value,
          role: 'user'
        })
          .subscribe(data => {
            console.log(data);
            localStorage.setItem('currentUserId', JSON.stringify(data.id));
            localStorage.setItem('currentUserEmail', JSON.stringify(data.email));
            localStorage.setItem('currentUserRole', JSON.stringify(data.role));
            this.router.navigate([this.path.PROFILE]);
            this.notification.showMessage(this.message.SUCCESS_SIGN_UP);
          });
      } else {
        console.log('4')
        this.error = true;
      }
    } else {
      console.log('5')
      this.noncheck = true;
      this.error = true;
    }
  }
}


