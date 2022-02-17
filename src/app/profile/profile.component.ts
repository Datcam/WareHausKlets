import { Component, Injectable, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginComponent } from '../login/login.component';
import { CURRENT_USER } from '../mock-friends-data';
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
  constructor(private auth: AuthService) { }
  
 
  ngOnInit(): void {
    this.enteredEmail = this.auth.email;
  console.log(this.enteredEmail)
  this.form = new FormGroup({
    name: new FormControl(null,[Validators.required, Validators.minLength(5)]),
    
    age:new FormControl(null,[Validators.required])})

  }
  onSubmit(){
    CURRENT_USER.username = this.form.get('name')?.value;
    CURRENT_USER.age = this.form.get('age')?.value;

    console.log(CURRENT_USER.username);
    console.log(CURRENT_USER.age);
    console.log(CURRENT_USER);
  }
}
