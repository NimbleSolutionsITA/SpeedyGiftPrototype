import { Component, trigger, state, style, animate, transition, keyframes } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'filtri',
  templateUrl: 'filtri.component.html',
  styleUrls: [
  './filtri.component.css',
    '../../../assets/css/flaticon.css'
  ],
  animations: [
    trigger('flyInOutBrand', [
      state('in', style({height: '*'})),
      transition('void => *', [
        animate(500, keyframes([
          style({opacity: 0, height: '0', offset: 0}),
          style({opacity: 1, height: '*',  offset: 0.25}),
          style({opacity: 1, height: '*',  offset: 1.0})
        ]))
      ]),
      transition('* => void', [
        animate(500, keyframes([
          style({opacity: 1, height: '*', offset: 0}),
          style({opacity: 1, height: '*',  offset: 0.75}),
          style({opacity: 0, height: '0',  offset: 1.0})
        ]))
      ])
    ]),
    trigger('flyInOutColor', [
      state('in', style({height: '*'})),
      transition('void => *', [
        animate(500, keyframes([
          style({opacity: 0, height: '0', offset: 0}),
          style({opacity: 1, height: '*',  offset: 0.25}),
          style({opacity: 1, height: '*',  offset: 1.0})
        ]))
      ]),
      transition('* => void', [
        animate(500, keyframes([
          style({opacity: 1, height: '*', offset: 0}),
          style({opacity: 1, height: '*',  offset: 0.75}),
          style({opacity: 0, height: '0',  offset: 1.0})
        ]))
      ])
    ]),
    trigger('flyInOutSize', [
      state('in', style({height: '*'})),
      transition('void => *', [
        animate(500, keyframes([
          style({opacity: 0, height: '0', offset: 0}),
          style({opacity: 1, height: '*',  offset: 0.25}),
          style({opacity: 1, height: '*',  offset: 1.0})
        ]))
      ]),
      transition('* => void', [
        animate(500, keyframes([
          style({opacity: 1, height: '*', offset: 0}),
          style({opacity: 1, height: '*',  offset: 0.75}),
          style({opacity: 0, height: '0',  offset: 1.0})
        ]))
      ])
    ]),
    trigger('flyInOutPrice', [
      state('in', style({height: '*'})),
      transition('void => *', [
        animate(500, keyframes([
          style({opacity: 0, height: '0', offset: 0}),
          style({opacity: 1, height: '*',  offset: 0.25}),
          style({opacity: 1, height: '*',  offset: 1.0})
        ]))
      ]),
      transition('* => void', [
        animate(500, keyframes([
          style({opacity: 1, height: '*', offset: 0}),
          style({opacity: 1, height: '*',  offset: 0.75}),
          style({opacity: 0, height: '0',  offset: 1.0})
        ]))
      ])
    ]),
    trigger('flyInOutOrder', [
      state('in', style({height: '*'})),
      transition('void => *', [
        animate(500, keyframes([
          style({opacity: 0, height: '0', offset: 0}),
          style({opacity: 1, height: '*',  offset: 0.25}),
          style({opacity: 1, height: '*',  offset: 1.0})
        ]))
      ]),
      transition('* => void', [
        animate(500, keyframes([
          style({opacity: 1, height: '*', offset: 0}),
          style({opacity: 1, height: '*',  offset: 0.75}),
          style({opacity: 0, height: '0',  offset: 1.0})
        ]))
      ])
    ])
  ]
})

export class FiltriComponent {

  public brand:boolean = false;
  public colorprod:boolean = false;
  public size:boolean = false;
  public price:boolean = false;
  public order:boolean = false;
  public filter = 0;
  

}
