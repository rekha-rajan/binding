import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {
  textValue: string = 'Hello, world!';
  logValue() {
    console.log('Input has been focused');
  }
}
