import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  userData:any={}
  getData(data: any) {
    console.warn(data);
    this.userData= data
  }
}
