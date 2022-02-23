import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NotificationService } from '../../services/notification.service';
import { DataService } from 'src/app/services/data.service';
import { User } from '../../shared/models/user.model';
import { UserObjectProperty, Message } from 'src/app/shared/enum-data';


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

  constructor(private data: DataService, private notification: NotificationService) { }

  ngOnInit(): void {
    this.enteredEmail = this.currentUser.email;
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.minLength(this.MIN_NAME_LENGTH)]),
      age: new FormControl(null, [Validators.required])
    });
  }

  onSubmit() {
    this.currentUser.userName = this.form.get(this.userProperty.NAME)?.value;
    this.currentUser.age = this.form.get(this.userProperty.AGE)?.value;
    this.data.saveUserData(this.currentUser);
    this.notification.showMessage(this.message.SAVE_DATA);
  }

  onEdit() {
    this.currentUser.userName = '';
    this.currentUser.age = 0;
    this.data.saveUserData(this.currentUser);
  }
}
