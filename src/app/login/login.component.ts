import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  styles : ['.textColor { color : white }']
})
export class LoginComponent implements OnInit {
  passHint = '';
  passHintSw = true;
  numberClicks = [];
  constructor() {
    this.passHintSw = false;
  }

  ngOnInit() {
  }

  onButtonClick() {
    this.numberClicks.push(new Date());
         if (this.passHint === 'Tuna') {
          this.passHintSw = false;
          this.passHint = '';
         } else {
           this.passHintSw = true;
           this.passHint = 'Tuna';
         }
    }
}
