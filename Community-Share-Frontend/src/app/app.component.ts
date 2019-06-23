import { Component, TemplateRef, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { FormBuilder } from '@angular/forms';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'Community-Share-Frontend';
  background = "";
  accent= "";
  username = "Login";

  modalRef: BsModalRef;
  constructor(private modalService: BsModalService,
    private fb: FormBuilder,
    private authService: AuthenticationService) {}
 
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  loginForm = this.fb.group({
    username: [''],
    password: ['']
  });

  ngOnInit(): void {
    this.authService.username.subscribe(
      (data: string) => {
        this.username = data;
      },
      error => {
        console.log("Error in Event Emitter");
      }
    );
  }
  
  onLogin(template: TemplateRef<any>){
    var userName = this.loginForm.controls.username.value;
    var userPassword = this.loginForm.controls.password.value;
    console.log(userName+userPassword);
    this.authService.login(userName,userPassword).subscribe(
      (loggedIn:boolean)=>{
        if(loggedIn){
        }else{
        }
      }
    );
    this.modalRef.hide();
  }

}
