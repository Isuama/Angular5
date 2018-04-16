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
    hasWord = false;

    onNameChange(event: Event) {
       this.printName = '';
       if (!(<HTMLInputElement>event.target).value) {
        this.hasWord = false;
       } else {
           this.hasWord = true;
       }
       console.log((<HTMLInputElement>event.target).value);
    }

    onLogin() {
    console.log(event);
     this.printName = 'Hello ' + this.userName + '!!!';
     this.showName = true;
     this.hasWord = false;
     this.userName = '';
 }
}
