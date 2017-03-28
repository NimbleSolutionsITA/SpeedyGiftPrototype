import { Component, trigger, state, style, animate, transition } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: [
  './navbar.component.css',
    '../../../assets/css/flaticon.css'
  ],
  animations: [
    trigger('flyInOut', [
      state('in', style({height: '*'})),
      transition('void => *', [
        style({height: '0'}),
        animate(300, style({height: '*'}))
      ]),
      transition('* => void', [
        animate(300, style({height: '0'}))
      ])
    ])
  ]
})

export class NavbarComponent {

  public password = "secret";

  public accedi:boolean = false;

  public isCollapsed:boolean = true;

  public collapsed(event:any):void {
    console.log(event);
  }

  public expanded(event:any):void {
    console.log(event);
  }

  private logo: string;

  constructor(){
    this.logo = 'assets/images/logo.png';
  }

}
