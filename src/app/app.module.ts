import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClassroomComponent } from './classroom/classroom.component';
import { VocabularyService } from './classroom/vocabulary.service';
import { HeaderComponent } from './header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';
import { AuthInterceptor } from './auth/auth-interceptor.service';

const appRoutes: Routes = [
  {path: "classroom", canActivate: [AuthGuard], component: ClassroomComponent},
  {path: "login", component: AuthComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ClassroomComponent,
    HeaderComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule, ReactiveFormsModule, RouterModule.forRoot(appRoutes), HttpClientModule
  ],
  providers: [VocabularyService, AuthService, AuthGuard, { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
