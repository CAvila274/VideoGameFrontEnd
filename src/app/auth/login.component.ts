import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, RequiredValidator, UntypedFormGroup, Validators } from '@angular/forms';
import { LoginRequest } from './login-request';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterLink } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { AuthService } from './auth.service';
import { LoginResponse } from './login-response';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    RouterLink,
    MatInputModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',

})
export class LoginComponent implements OnInit{
onSubmit(): void {
  var loginRequest: LoginRequest = {
    userName: this.form.controls["userName"].value,
    password: this.form.controls["password"].value,

  };

  var loginResponse: LoginResponse;

  this.authService.login(loginRequest).subscribe(
    {
      next: result => {
        loginResponse = result;
        console.log(loginResponse);
         if(result.success){
          localStorage.setItem("coinvalue", result.token);
          this.router.navigate(["/"]);
        }
      },
      error: e => console.error(e)
    }
  );
}

  ngOnInit(): void {
   this.form = new FormGroup({
    userName: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required)

   });
  }
  form!: UntypedFormGroup;
  
  constructor(private authService: AuthService, private router: Router){}
  
}
