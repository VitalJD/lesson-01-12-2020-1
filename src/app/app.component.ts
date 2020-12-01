import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
disabled = true;
hide = true;

public credential = {
  login: '',
  password: ''
}

show() {
  this.disabled = !this.disabled;
}
}
