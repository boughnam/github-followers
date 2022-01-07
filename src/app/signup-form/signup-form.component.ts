import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsernameValidator } from './username.validator';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  form = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      UsernameValidator.cannotContainSpace
    ]),
    password: new FormControl('',Validators.required)
  })

  get username(){
    return this.form.get('username');
  }

  get password(){
    return this.form.get('password');
  }

  constructor() { }

  ngOnInit(): void {
  }

  submit(f:any){

  }

}
