import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Asset Manager';
  assets = [
    {name:'Dresser', activity:'CarryLoad'},
    {name:'Solo', activity:'Driller'},
    {name:'Scooptramp', activity:'Loader'},
  ];
  
}
