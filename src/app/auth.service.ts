import { HttpClient, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs/internal/Subject";

@Injectable()
export class AuthService {
    isLogged: boolean = false
    LOGIN_URL: string = 'https://vocable-trainer-2023.azurewebsites.net/login'

    constructor(private http: HttpClient) {}
    
    login(loginData: {username:string, password:string}):void {
        this.isLogged = true
        /*
        this.http.post(this.LOGIN_URL, loginData).subscribe((res: HttpResponse<any>)=>{
            // if session id cookie is set by backend then login was successful
            const cookies = res.headers.getAll('Set-Cookie');
            console.log(cookies);
            if(cookies) {
                this.isLogged.next(true)
            }
          })
          */
    }

    logout():void {
        this.isLogged = false
    }
}