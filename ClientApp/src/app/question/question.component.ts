import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api/api-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  question = {

  }
  quizId
  constructor(private api: ApiService, private route:ActivatedRoute) {

   }

  post(question){
    question.quizId=this.quizId;
    this.api.postQuestion(question);
  }
  put(question){    
    this.api.putQuestion(question);
  }
  ngOnInit() {

    this.quizId =this.route.snapshot.paramMap.get('quizId');   
     this.api.questionSelected.subscribe(q => this.question = q);
  }

}
