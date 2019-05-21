import { Injectable, Inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
import { SESSION_STORAGE, WebStorageService } from 'angular-webstorage-service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private isLoggedIn = false;
  private authKey = "authentication";
  private mailKey = "email";
  userEmail = "anonymous@email.com";

  constructor(@Inject(SESSION_STORAGE) private storage: WebStorageService) {
     
  }

  checkAuth(): boolean{
    if(!this.isLoggedIn){
      var data= this.storage.get(this.authKey);
      if(data == this.authKey ){
        this.isLoggedIn = true;
        this.userEmail = this.storage.get(this.mailKey);
        return true;
      }else{
        return false;
      }
    }else
      return true;
  }

  login(email:string,password:string): Observable<boolean> {
    this.userEmail = email;
    this.storage.set(this.authKey, this.authKey);
    this.storage.set(this.mailKey, this.userEmail);
    return of(true).pipe(
      delay(1000),
      tap(val => this.isLoggedIn = true)
    );
  }

  logout(): void {
    this.isLoggedIn = false;
    this.storage.remove(this.authKey);
    this.storage.remove(this.mailKey);
  }
}
