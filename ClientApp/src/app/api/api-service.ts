import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) {

  }

  /* QUESTION API */
  private selectedQuestion = new Subject<any>();
  questionSelected = this.selectedQuestion.asObservable();
  postQuestion(question) {

    this.http.post("/api/questions", question).subscribe(res => console.log(res))
  }
  putQuestion(question) {

    this.http.put(`/api/questions/${question.id}`, question).subscribe(res => console.log(res))
  }
  getQuestions(quizid) {
    return this.http.get(`/api/questions/${quizid}`)
  }
  selectQuestion(question) {
    this.selectedQuestion.next(question);
  }


  /* QUIZ API */

  private selectedQuiz = new Subject<any>();
  quizSelected = this.selectedQuiz.asObservable();

  postQuiz(quiz) {

    this.http.post("/api/quizzes", quiz).subscribe(res => console.log(res))
  }
  putQuiz(quiz) {

    this.http.put(`/api/quizzes/${quiz.id}`, quiz).subscribe(res => console.log(res))
  }
  getQuizzes() {
    return this.http.get("/api/quizzes")
  }
  getAllQuizzes() {
    return this.http.get("/api/quizzes/all")
  }
  selectQuiz(quiz) {
    this.selectedQuiz.next(quiz);
  }

}
