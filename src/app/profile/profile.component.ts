import { Component, Injectable, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../models/user.model';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
@Injectable()

export class ProfileComponent implements OnInit {

  form!: FormGroup
  enteredEmail! : string
  currentUser: User = this.auth.getCurrentUser();
  constructor(private auth: AuthService) { }
 
  ngOnInit(): void {
    this.enteredEmail = this.auth.getCurrentUser().email;
    this.form = new FormGroup({
    name: new FormControl(null,[Validators.required, Validators.minLength(5)]),
    
    age:new FormControl(null,[Validators.required])})

  }
  onSubmit(){
    this.currentUser.userName = this.form.get('name')?.value;
    this.currentUser.age = this.form.get('age')?.value;
  }

  onEdit(){
    this.currentUser.userName = '';
    this.currentUser.age = 0;
  }
}
