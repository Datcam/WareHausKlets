import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@services/auth.service';
import { User } from '@models/user.model';
import { USERS } from '@shared/mock-data';
import { Path, UserObjectProperty } from '@shared/enum-data';
import { HttpClient } from "@angular/common/http";
import { NotificationService } from "@services/notification.service";
import { Message } from "@shared/enum-data";
import {EventBusService} from "@services/event-bus.service";

@Component({
  selector: 'sign-up-page',
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
  message = Message;
  error = false;
  errorPassword = false;
  userName: string | null | undefined;

  constructor(private auth: AuthService, private router: Router, public http: HttpClient, public notification: NotificationService, public eventBus: EventBusService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(this.MIN_PASSWORD_LENGTH)])
    });
  }

  onSubmit() {
    const email = this.form.get(this.userProperty.EMAIL)?.value;
    const password = this.form.get(this.userProperty.PASSWORD)?.value;

    this.http.get('http://localhost:3000/user_list')
      .subscribe(res => {
        const a = JSON.stringify(res);
        const b = JSON.parse(a);
        let currentUser;

        // @ts-ignore
        const isPresentUser = b.some((item) => {
          if (item.email === email) {
            currentUser = item;

            return true;
          }
        });

       if (isPresentUser) {
         // @ts-ignore
         localStorage.setItem('currentUserId', JSON.stringify(currentUser.id));
         // @ts-ignore
         localStorage.setItem('currentUserRole', currentUser.role);
         // @ts-ignore
         localStorage.setItem('currentUserEmail', JSON.stringify(currentUser.email));

         // @ts-ignore
         if (currentUser.password === password) {
           this.check = true;
           this.noncheck = false;
           this.auth.logIn(currentUser);
           this.router.navigate([this.path.PROFILE]);
           this.notification.showMessage(this.message.SUCCESS_SIGN_IN);
           // @ts-ignore
           this.eventBus.addToInventory(currentUser.name);
         } else {
           this.noncheck = true;
           this.errorPassword = true;
         }
       } else {
         console.log('aaa')
         this.error = true;
       }
      });
  }
}


