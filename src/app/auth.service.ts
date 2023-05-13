import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { tap } from "rxjs";
import { Subject } from "rxjs/internal/Subject";

@Injectable()
export class AuthService {
    isLogged: boolean = false
    sessionId: string = ''
    LOGIN_URL: string = 'http://127.0.0.1:5000/login_api'
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
        }),
        observe: 'response' as 'body',
        withCredentials: true,
    }
    LOGOUT_URL: string = 'http://127.0.0.1:5000/logout_api'

    constructor(private http: HttpClient) {}
    
    login(loginData: {username:string, password:string}):void {
        let body = new URLSearchParams()
        body.set('username', loginData.username)
        body.set('password', loginData.password)
        
        this.http.post(this.LOGIN_URL, body, this.httpOptions)
        .pipe(tap((res: any) => {
            localStorage.setItem('access_token', res.body.access_token)
        }))
            .subscribe((res: HttpResponse<any>)=>{
                if(res.status == 200){
                    console.log('TOOOOKKKEN', localStorage.getItem('access_token'))
                    this.isLogged = true
                }
            })
    }

    logout():void {
        this.http.get(this.LOGOUT_URL, {'observe': 'response' as 'body'})
            .subscribe((res: HttpResponse<any>) => {
                this.isLogged = false
        })
    }
}