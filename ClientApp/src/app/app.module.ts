import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import {
  MatButtonModule,
  MatInputModule,
  MatCardModule,
  MatListModule,
  MatMenuModule,
  MatToolbarModule,
  MatExpansionModule,
  MatRadioModule,
  MatDialogModule
} from "@angular/material"
import {RouterModule} from "@angular/router";
import { AppComponent } from './app.component';
import { QuestionComponent } from './question/question.component';
import { ApiService } from './api/api-service';
import { QuestionsComponent } from './questions/questions.component';
import {routs} from './api/routs';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { QuizComponent } from './quiz/quiz.component';
import { QuizzesComponent } from './quizzes/quizzes.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './api/auth.service';
import { AuthIntercepter } from './api/auth.intercepter';
import { LogoutComponent } from './logout/logout.component';
import { PlayComponent } from './play/play.component';
import { PlayquizComponent } from './playquiz/playquiz.component';
import { FinishedComponent } from './finished/finished.component';


@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    QuestionsComponent,
    HomeComponent,
    NavigationComponent,
    FooterComponent,
    QuizComponent,
    QuizzesComponent,
    RegisterComponent,
    LoginComponent,
    LogoutComponent,
    PlayComponent,
    PlayquizComponent,
    FinishedComponent,

  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    HttpClientModule,
    MatListModule,
    MatMenuModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatRadioModule,
    MatDialogModule,
    RouterModule.forRoot(routs)

  ],
  providers: [ApiService, AuthService, 
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthIntercepter,
      multi:true
    }
  ],
  bootstrap: [AppComponent],
  entryComponents:[FinishedComponent]
})
export class AppModule { }
