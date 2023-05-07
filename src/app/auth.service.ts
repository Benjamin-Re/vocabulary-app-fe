import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, tap, of } from "rxjs";
import { Subject } from "rxjs/internal/Subject";
import { catchError, first, map } from 'rxjs/operators'; // Import map here


@Injectable()
export class AuthService {
    LOGIN_URL: string = 'http://127.0.0.1:5000/login_api'
    LOGOUT_URL: string = 'http://127.0.0.1:5000/logout_api'
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
        }),
        observe: 'response' as 'body',
        withCredentials: true,
        
    }

    constructor(private http: HttpClient) {}
        
        
    isLoggedIn(loginData?: {username:string, password:string}):Observable<boolean>{      
        console.log("## isLoggedIn()")
        let body = new URLSearchParams()
        
        if (loginData){
            body.set('username', loginData.username)
            body.set('password', loginData.password)
        }

        return this.http.post(this.LOGIN_URL, body, this.httpOptions)
        .pipe(
            first(),
            map((res: HttpResponse<any>) => {
                if (res.status === 200) {
                    console.log("TRUE");
                    return true;
                } else {
                    console.log("FALSE");
                    return false;
                }
            }),
            catchError(error => {
                console.error("Error in isLoggedIn()", error);
                return of(false); // Import 'of' from 'rxjs' if not already imported
            })
        );
    }

    logout():Observable<boolean>{      
        console.log("## logout()")
        let body = new URLSearchParams()
        return this.http.post(this.LOGOUT_URL, body, this.httpOptions)
        .pipe(
            first(),
            map((res: HttpResponse<any>) => {
                if (res.status === 200) {
                    console.log("TRUE");
                    return true;
                } else {
                    console.log("FALSE");
                    return false;
                }
            })
        );
    }


}