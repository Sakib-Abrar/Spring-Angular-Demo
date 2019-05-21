import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { AuthenticationService } from '../services/authentication/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthenticationService
  ) { }

  ngOnInit() {
  }

  loginForm = this.fb.group({
    email: ['', Validators.email],
    password: ['']
  });

  onSubmit(){
    var userEmail = this.loginForm.controls.email.value;
    var userPassword = this.loginForm.controls.password.value;
    this.authService.login(userEmail,userPassword).subscribe(
      (loggedIn:boolean)=>{
        if(loggedIn){
          this.router.navigate(["/"]);
        }else{
          this.router.navigate(["/login"]);
        }
      }
    );
  }

}
