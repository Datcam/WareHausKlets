import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NotificationService } from '@services/notification.service';
import { DataService } from '@services/data.service';
import { User } from '@models/user.model';
import { UserObjectProperty, Message } from '@shared/enum-data';
import { HttpClient } from "@angular/common/http";


@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css'],
})

export class ProfilePageComponent implements OnInit {

  MIN_NAME_LENGTH: number = 5;
  form!: FormGroup;
  enteredEmail!: string;
  currentUser: User = this.data.getCurrentUser();
  userProperty = UserObjectProperty;
  message = Message;
  notValid: boolean = false;

  constructor(private data: DataService, private notification: NotificationService, public http: HttpClient) { }

  ngOnInit(): void {
    this.enteredEmail = this.currentUser.email;
    this.form = new FormGroup({
      name: new FormControl(this.currentUser.name || '', [Validators.required, Validators.minLength(this.MIN_NAME_LENGTH)]),
      age: new FormControl(this.currentUser.age || '', [Validators.required])
    });
  }

  onSubmit() {
    const currentUser = localStorage.getItem('currentUserId');
    if (!this.form.get(this.userProperty.NAME)?.invalid && this.form.get(this.userProperty.AGE)?.value) {
      this.http.patch(`http://localhost:3000/user_list/${currentUser}`, {
        name: this.form.get(this.userProperty.NAME)?.value,
        age: this.form.get(this.userProperty.AGE)?.value,
      })
        .subscribe(res => {
          this.notValid = false;
          this.currentUser.userName = this.form.get(this.userProperty.NAME)?.value;
          this.currentUser.age = this.form.get(this.userProperty.AGE)?.value;
          // this.data.saveUserData(this.currentUser);
          this.notification.showMessage(this.message.SAVE_DATA);
          console.log(res);
        });
    } else {
      this.notValid = true;
    }
  }

  onEdit() {
    this.currentUser.userName = '';
    this.currentUser.age = 0;
  }
}
