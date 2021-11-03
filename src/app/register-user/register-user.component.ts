import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {User} from "../models/User";
import {AuthService} from "../services/security/auth.service";

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  userForm: FormGroup;
  user: User = {username: '', password: '', email: ''}

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private formBuilder: FormBuilder, private authService: AuthService) {
    this.userForm = formBuilder.group({
      username: formBuilder.control('', Validators.required),
      password: formBuilder.control('', Validators.required),
      email: formBuilder.control('', [Validators.required, Validators.email])
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    /*this.user.username = this.userForm.value['username'];
    this.user.password = this.userForm.value['password'];
    this.user.email = this.userForm.value['email'];

    this.authService.register(this.user).subscribe(data => {
      console.log(data);
      this.isSuccessful = true;
    },
      error => {
      this.errorMessage = error.errorMessage;
      this.isSignUpFailed = true;
      });*/
    console.log(this.userForm);
  }

}
