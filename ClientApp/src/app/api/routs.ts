import { QuestionComponent } from "../question/question.component";
import { QuestionsComponent } from '../questions/questions.component';
import { HomeComponent } from '../home/home.component';
import { QuizComponent } from '../quiz/quiz.component';
import { RegisterComponent } from '../register/register.component';
import { LoginComponent } from '../login/login.component';
import { LogoutComponent } from '../logout/logout.component';
import { PlayComponent } from '../play/play.component';
import { PlayquizComponent } from '../playquiz/playquiz.component';


export const routs =[
    {path:'question', component: QuestionComponent},
    {path:'question/:quizId', component: QuestionComponent},
    {path:'questions', component: QuestionsComponent},
    {path:'questions/:quizId', component: QuestionsComponent},
    {path:'', component: HomeComponent},
    {path:'quiz', component: QuizComponent},
    {path:'play', component: PlayComponent},
    {path:'register', component: RegisterComponent},
    {path:'login', component: LoginComponent},
    {path:'logout', component: LogoutComponent},
    {path:'play-quiz/:quizId', component: PlayquizComponent},
]
 

export const authRouts = (isAuthenticated) =>{

   return  [
    {path:'question', component: isAuthenticated? QuestionComponent : LoginComponent},
    {path:'question/:quizId', component: isAuthenticated? QuestionComponent : LoginComponent},
    {path:'questions', component: isAuthenticated? QuestionsComponent : LoginComponent},
    {path:'questions/:quizId', component: isAuthenticated? QuestionsComponent : LoginComponent},
    {path:'', component: isAuthenticated? HomeComponent : LoginComponent},
    {path:'quiz', component: isAuthenticated? QuizComponent : LoginComponent},
    {path:'register', component: !isAuthenticated ? HomeComponent : LoginComponent},
    {path:'login', component: !isAuthenticated ? HomeComponent : LoginComponent},
    {path:'logout', component: LogoutComponent},
    ]    
}
