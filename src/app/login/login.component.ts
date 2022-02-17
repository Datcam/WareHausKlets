import { Component, Injectable, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
@Injectable()

export class LoginComponent implements OnInit {

  public form!: FormGroup //= new FormGroup({
    // })
    arr = [{ id: 1, email:"yarmannagibator@gmail.com", password:"toothpaste"},{id:2, email:"mmarkiv0413@outlook.com", password:"123456"}]
    check!:boolean
    noncheck:boolean = false
  constructor() {
    
   }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null,[Validators.required,Validators.email]),
      password:new FormControl(null,[Validators.required,Validators.minLength(6)])
    })
  }
   onSubmit(){
    this.arr.map((value) => {
      if(this.form.get('email')?.value === value.email && this.form.get('password')?.value === value.password){
        this.check = true;
        this.noncheck = false;
        console.log(this.check);
      }
      else {
        console.log(this.check);
        this.noncheck = true;
      }
      })
     
    console.log(this.form.get('email')?.value);
    console.log(this.form.get('password')?.value);
    // return this.form;  
    // fetch("https://620ad5cc92946600171c5caa.mockapi.io/users",).then((response)=>response.json())
    // .then((data)=>console.log(data));
  }

}


