import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../../shared/models/user.model';
import { NotificationService } from '../../services/notification.service';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css'],
})

export class ProfilePageComponent implements OnInit {

  form!: FormGroup;
  enteredEmail!: string;
  currentUser: User = this.data.getCurrentUser();
  constructor(private data: DataService, private notification: NotificationService) { }

  ngOnInit(): void {
    this.enteredEmail = this.currentUser.email;
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.minLength(5)]),
      age: new FormControl(null, [Validators.required])
    });
  }

  onSubmit() {
    this.currentUser.userName = this.form.get('name')?.value;
    this.currentUser.age = this.form.get('age')?.value;
    this.data.saveUserData(this.currentUser);
    this.notification.showMessage('Your data was successfully saved!');
  }

  onEdit() {
    this.currentUser.userName = '';
    this.currentUser.age = 0;
    this.data.saveUserData(this.currentUser);
  }
}
