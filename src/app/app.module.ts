import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClassroomComponent } from './classroom/classroom.component';
import { VocabularyService } from './classroom/vocabulary.service';

@NgModule({
  declarations: [
    AppComponent,
    ClassroomComponent
  ],
  imports: [
    BrowserModule, ReactiveFormsModule
  ],
  providers: [VocabularyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
