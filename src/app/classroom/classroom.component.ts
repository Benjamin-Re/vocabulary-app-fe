import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { VocabularyTerm } from './vocabulary-term.model';
import { VocabularyService } from './vocabulary.service';

@Component({
  selector: 'app-classroom',
  templateUrl: './classroom.component.html',
  styleUrls: ['./classroom.component.css']
})
export class ClassroomComponent implements OnInit {
  form: FormGroup
  vocabulary: VocabularyTerm[]
  currentVocable: VocabularyTerm = null
  submitted: boolean = false
  isAnswerCorrect: boolean = false

  constructor(private vocabularyService: VocabularyService){
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      "user-answer": new FormControl(null, Validators.required)
    })
    this.vocabulary = this.vocabularyService.getVocabulary()
    this.currentVocable = this.vocabulary[0]
  }

  onSubmit(): void {
    console.log(this.form.value);
    // this.form.reset()
    this.submitted = true
    this.checkUserAnswer()
  }
  
  nextVocable(): void {
    this.submitted = false
    this.currentVocable = this.vocabulary[Math.floor(Math.random()*this.vocabulary.length)]    
  }

  checkUserAnswer(): void {
    let userAnswer: string = this.form.get('user-answer').value
    console.log(userAnswer);
    if(userAnswer === this.currentVocable.spanisch) {
      this.isAnswerCorrect = true
    } else {
      this.isAnswerCorrect = false
    }
  }
}
