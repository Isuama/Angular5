import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers,[app-servers],.app-servers',
  templateUrl: './servers.component.html',
  // template: '<app-server></app-server><app-server></app-server>',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = 'Test Server';
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created ! Name is ' + this.serverName ;
  }

  onUpdateServerName(event: Event) {
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
