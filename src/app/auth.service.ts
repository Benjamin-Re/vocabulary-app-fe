import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { tap } from "rxjs";
import { Subject } from "rxjs/internal/Subject";

@Injectable()
export class AuthService {
    isLogged: boolean = false
    LOGIN_URL: string = 'http://127.0.0.1:5000/login_api'
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
        }),
        observe: 'response' as 'body',
        withCredentials: true,
        
    }

    constructor(private http: HttpClient) {}
    
    login(loginData: {username:string, password:string}):void {
        let body = new URLSearchParams()
        body.set('username', loginData.username)
        body.set('password', loginData.password)
        
        this.http.post(this.LOGIN_URL, body, this.httpOptions)
            .subscribe((res: HttpResponse<any>)=>{
                if(res.status == 200){
                    this.isLogged = true
                }
            })
    }

    logout():void {
        this.isLogged = false
    }
}