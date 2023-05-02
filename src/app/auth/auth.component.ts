import { HttpClient, HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  authForm: FormGroup
  isLoginMode: boolean = true

  constructor(private http: HttpClient, public authService: AuthService) {}

  ngOnInit(): void {
    this.authForm = new FormGroup({
      "username": new FormControl(null, Validators.required),
      "password": new FormControl(null, Validators.required)
    })
  }

  onSubmit(): void {
    let loginData = {
      username: this.authForm.get('username').value,
      password: this.authForm.get('password').value
    }
    this.authService.login(loginData)
  }

  switchAuthMode(): void {
    this.isLoginMode = !this.isLoginMode
  }
}
