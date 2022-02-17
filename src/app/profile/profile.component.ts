import { Component, Injectable, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginComponent } from '../login/login.component';
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
  
  ngAfterContetnChecked(){
    
  }
  ngOnInit(): void {
    this.enteredEmail = this.auth.email;
  console.log(this.enteredEmail)
  this.form = new FormGroup({
    name: new FormControl(null,[Validators.required, Validators.minLength(5)]),
    
    age:new FormControl(null,[Validators.required])})

  }
  onSubmit(){

  }
}
