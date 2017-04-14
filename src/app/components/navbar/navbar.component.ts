import { Component, trigger, state, style, animate, transition } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

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

  public gruppo:boolean = false;

  public giftTab = 1;

  public isCollapsed:boolean = true;

  public navMenuItems = NAVMENUITEMS;



  public collapsed(event:any):void {
    console.log(event);
  }

  public expanded(event:any):void {
    console.log(event);
  }

  private logo: string;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute) {
    this.logo = 'assets/images/logo.png';

    this.navMenuItems.forEach(function(item){
      if (activatedRoute.snapshot.url[0].path == item.url) {
        item.active = true;
      }
    });
  }

}

export interface NavMenuItem {
  name: string;
  url: string;
  active: boolean;
}

//Navigation menu array implementing NavMenuItem interface
var NAVMENUITEMS: NavMenuItem[] = [
  { "name": "Lookbook", "url": "/lookbook", "active": false},
  { "name": "Vetrina", "url": "/vetrina", "active": false},
  { "name": "Negozi", "url": "/negozi", "active": false},
  { "name": "Guida regali", "url": "/wizard", "active": false}
];
