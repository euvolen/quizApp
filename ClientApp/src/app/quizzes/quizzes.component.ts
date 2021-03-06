import { Component, OnInit, } from '@angular/core';
import { ApiService } from '../api/api-service';

@Component({
  selector: 'quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.css']
})
export class QuizzesComponent implements OnInit{

  quizzes

  constructor(private api: ApiService) { }

  ngOnInit() {
      this.api.getQuizzes().subscribe(res => this.quizzes = res)
  }


}
