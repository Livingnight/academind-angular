import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // template: `
  //   <app-success-alert></app-success-alert>
// <!--    <app-server></app-server>-->
// <!--    <app-server></app-server>-->
// <!--    <app-success-alert></app-success-alert>-->
//   `,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
  // styles: [`
  //   app-servers {
  //       background: blue;
  //   }
  //   app-success-alert {
  //       background: blue;
  //       color: yellow;
  //   }
  // h2 {
  //     color: green;
  // }
  // `]
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
