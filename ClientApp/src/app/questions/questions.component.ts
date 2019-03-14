import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api/api-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  questions
  quizid
  
  constructor(private api: ApiService, private route:ActivatedRoute) {

   }

  ngOnInit() {
    this.quizid = this.route.snapshot.paramMap.get('quizId')
    this.api.getQuestions(this.quizid).subscribe(res => this.questions = res);
  }
  

}
