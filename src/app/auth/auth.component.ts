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
  errorMessage: string = null
  isLoggedIn: boolean = false

  constructor(private http: HttpClient, public authService: AuthService) {}

  ngOnInit(): void {
    this.authForm = new FormGroup({
      "username": new FormControl(null, Validators.required),
      "password": new FormControl(null, Validators.required)
    })
    console.log("auth.components.ts > INIT");
    this.authService.isLoggedIn().subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn;
    });
  }
  
  login(): void {
    let loginData = {
      username: this.authForm.get('username').value,
      password: this.authForm.get('password').value
    }
    this.authService.isLoggedIn(loginData).subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn;
      if(isLoggedIn){
          this.errorMessage = "Authentifiziert"
        }else{
          this.errorMessage = "Falsche Anmeldeinformationen"
        }
    });
  }

  logout(): void{
    this.authService.logout().subscribe(isLoggedIn => {
      this.isLoggedIn = !isLoggedIn;
    });
  }

  switchAuthMode(): void {
    this.isLoginMode = !this.isLoginMode
  }
}
