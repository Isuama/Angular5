import { Component } from '@angular/core';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    userName = '';
    printName = '';
    showName = false;

    onLogin() {
    console.log(event);
     this.printName = 'Hello ' + this.userName + '!!!';
     this.showName = true;
     this.userName = '';
 }
}
