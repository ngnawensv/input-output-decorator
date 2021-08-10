import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'input-output-decorator';
  myInputMessage = 'I am parent component';

  GetChildData(data) {
    console.log(data);
 }
}
