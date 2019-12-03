import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  template: `
    <div>Alert! You're task was completed successfully!</div>
    <app-warning-alert></app-warning-alert>
  `,
  // templateUrl: './success-alert.component.html',
  styles: [`
    div {
     font-size:  2.5em;
        background: lawngreen;
        color: blue;
    }
  `]
  // styleUrls: ['./success-alert.component.css']
})
export class SuccessAlertComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
