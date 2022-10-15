import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent implements OnInit {

  timeLeft: number = 6;
  interval: any;

  
  constructor() { }

  ngOnInit(): void {
  }

  startTimer() {
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft = 0;

      }
    },1000)
  }

  pauseTimer() {
    clearInterval(this.interval);
  }

  addTimer(){
    this.timeLeft = this.timeLeft + 5;
  }

  decreaseTimer(){
    this.timeLeft = this.timeLeft - 1;
  }
}
