import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api/api-service';
import { ActivatedRoute } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { FinishedComponent } from '../finished/finished.component';


@Component({
  selector: 'app-playquiz',
  templateUrl: './playquiz.component.html',
  styleUrls: ['./playquiz.component.css']
})
export class PlayquizComponent implements OnInit {
  quizid
  questions

  step = 0;
constructor(private api: ApiService, private route:ActivatedRoute, private dialog: MatDialog) { }
  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
  

  ngOnInit() {
    this.quizid = this.route.snapshot.paramMap.get('quizId')
    this.api.getQuestions(this.quizid).subscribe(res => {
      this.questions = res
      this.questions.forEach(q => {
        q.answers = [
          q.corAnswer,q.answer1,q.answer2,q.answer3,
        ]
        this.shuffle(q.answers);
      });
    })
  }
  finish(){
    var correct = 0;
    this.questions.forEach(q=>{
      if(q.corAnswer == q.selectedAnswer)
          correct++;
    });
    const dialogRef = this.dialog.open(FinishedComponent, {
      data: {correct, total: this.questions.length}
  })
  console.log(correct)
}
  shuffle(list){
    for(let i= list.length; i; i--){
      let j = Math.floor(Math.random()*i);
      [list[i-1], list[j]] = [list[j], list[i-1]];
    }
  }
}
