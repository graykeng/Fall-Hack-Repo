import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class username {
  // usernameSubject: BehaviorSubject<string>;
  username!: string;

  constructor() {
    // this.usernameSubject = new BehaviorSubject<username>

    // this.username = this.username;
  }
}




