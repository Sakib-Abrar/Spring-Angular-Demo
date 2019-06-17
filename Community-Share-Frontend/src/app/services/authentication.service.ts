import { Injectable, EventEmitter, Output} from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  userName: string;
  isLoggedIn: boolean;

  @Output() username: EventEmitter<string> = new EventEmitter();

  constructor() { }
  
  login(name:string,password:string): Observable<boolean> {
    this.userName = name;
    this.username.emit(name);
    return of(true).pipe(
      delay(1000),
      tap(val => this.isLoggedIn = true)
    );
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
