import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../../shared/models/user.model';
import { AuthService } from '../../services/auth.service';
import { NotificationService } from '../../services/notification.service';


@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css'],
})

export class ProfilePageComponent implements OnInit {

  form!: FormGroup
  enteredEmail! : string
  currentUser: User = this.auth.getCurrentUser();
  constructor(private auth: AuthService, private notification: NotificationService) { }
 
  ngOnInit(): void {
    this.enteredEmail = this.auth.getCurrentUser().email;
    this.form = new FormGroup({
    name: new FormControl(null,[Validators.required, Validators.minLength(5)]),
    
    age:new FormControl(null,[Validators.required])})

  }
  onSubmit(){
    this.currentUser.userName = this.form.get('name')?.value;
    this.currentUser.age = this.form.get('age')?.value;
    this.notification.showMessage('Your data was successfully saved!')
  }

  onEdit(){
    this.currentUser.userName = '';
    this.currentUser.age = 0;
  }
}
