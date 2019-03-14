import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api/api-service';



@Component({
  selector: 'quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  quiz={

  }
  constructor(private api: ApiService) { }

  post(quiz){
    this.api.postQuiz(quiz);
    this.quiz={}

  }

  edit(quiz){
    this.api.putQuiz(quiz)
    this.quiz ={      
    }
  }

  ngOnInit() {
    this.api.quizSelected.subscribe(res => this.quiz = res)
  }

}
