import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NotificationService } from '@services/notification.service';
import { DataService } from '@services/data.service';
import { User } from '@models/user.model';
import { UserObjectProperty, Message } from '@shared/enum-data';


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

  constructor(private data: DataService, private notification: NotificationService) { }

  ngOnInit(): void {
    this.enteredEmail = this.currentUser.email;
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.minLength(this.MIN_NAME_LENGTH)]),
      age: new FormControl(null, [Validators.required])
    });
  }

  onSubmit() {
    if (!this.form.get(this.userProperty.NAME)?.invalid && this.form.get(this.userProperty.AGE)?.value) {
      this.notValid = false;
      this.currentUser.userName = this.form.get(this.userProperty.NAME)?.value;
      this.currentUser.age = this.form.get(this.userProperty.AGE)?.value;
      this.data.saveUserData(this.currentUser);
      this.notification.showMessage(this.message.SAVE_DATA);
    } else {
      this.notValid = true;
    }
  }

  onEdit() {
    this.currentUser.userName = '';
    this.currentUser.age = 0;
  }
}
