import { Component} from '@angular/core';
import { AuthService } from '../api/auth.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  form
  constructor(private auth :AuthService, private fb: FormBuilder) { this.form = fb.group({
   
    email:['', Validators.required],
    password:['', Validators.required,],
  })}

  login(){
    this.auth.loginUser(this.form.value)
  }
}
