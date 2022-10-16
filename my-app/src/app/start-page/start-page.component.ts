import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { username } from '../service/username.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss']
})
export class StartPageComponent implements OnInit {

  constructor(
    private username: username,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  name: string = "";
  submitted = false;

  nameForm = new FormGroup ({
    username : new FormControl,
  })

  startGame () {
    // this.submitted = true;
    // const uName = {
    //   username: this.nameForm.value.username
    // }
    // console.log(event);
    console.log(this.name);
    this.username.username = this.name;
    this.router.navigate(['/playground'])

  }

}
