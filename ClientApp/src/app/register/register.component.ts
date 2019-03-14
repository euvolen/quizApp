import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../api/auth.service';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {

  form 
  constructor(private auth: AuthService, private fb: FormBuilder) {
    this.form = fb.group({
      name:['', Validators.required],
      email:['', Validators.required],
      password:['', Validators.required,],
    })
   }

   register(){
      this.auth.registerUser(this.form.value)
   }

}
