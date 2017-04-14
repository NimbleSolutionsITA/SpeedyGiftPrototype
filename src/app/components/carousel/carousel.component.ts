// Import Component form the angular core package
import { Component, trigger, state, style, transition, animate, ViewChild, ElementRef } from '@angular/core';

// Import the Image interface
import {Image} from './image.interface';

// Compoent Decorator
@Component({
  //Name of our tag
  selector: 'css-carousel',
  //Template for the tag
  templateUrl: 'carousel.component.html',
  //Styles for the tag
  styleUrls: [
    'carousel.component.css',
    '../../../assets/css/flaticon.css'
  ],
  animations: [
    trigger('carouselState', [
      state('start', style({
        left: '0%'
      })),
      transition('end => start', [
        animate(500)
      ]),
      transition('mid => start', [
        animate(500)
      ]),
      state('mid', style({
        left: '-33.3333%'
      })),
      transition('start => mid', [
        animate(500)
      ]),
      transition('end => mid', [
        animate(500)
      ]),
      state('end', style({
        left: '-66.6666%'
      })),
      transition('mid => end', [
        animate(500)
      ]),
      transition('start => end', [
        animate(500)
      ])
    ])
  ]
})


//Carousel Component itself
export class CSSCarouselComponent {
  //images data to be bound to the template
  public images = IMAGES;

  isActiveStart = true;
  isActiveMid = false;
  isActiveEnd = false;

  state = 'start';

  movePanelLeft() {

    switch(this.state) {
      case 'start':
        this.state = 'end';
        this.isActiveStart= false;
        this.isActiveEnd = true;
        this.images[1].active = false;
        this.images[2].active = true;
        break;
      case 'mid':
        this.state = 'start';
        this.isActiveMid= false;
        this.isActiveStart = true;
        this.images[2].active = false;
        this.images[1].active = true;
        break;
      case 'end':
        this.state = 'mid';
        this.isActiveEnd= false;
        this.isActiveMid = true;
        this.images[0].active = false;
        this.images[2].active = true;
        break;
    }
  }

  movePanelRight() {

    switch(this.state) {
      case 'start':
        this.state = 'mid';
        this.isActiveStart= false;
        this.isActiveMid = true;
        this.images[1].active = false;
        this.images[2].active = true;
        break;
      case 'mid':
        this.state = 'end';
        this.isActiveMid= false;
        this.isActiveEnd = true;
        this.images[2].active = false;
        this.images[3].active = true;
        break;
      case 'end':
        this.state = 'start';
        this.isActiveEnd = false;
        this.isActiveStart= true;
        this.images[3].active = false;
        this.images[1].active = true;
        break;
    }
  }

}

//IMAGES array implementing Image interface
var IMAGES: Image[] = [
  { "name": "Nome Prodotto 1", "url": "assets/images/products/prod1.jpg", "brand": "brand 1", "price": "129,99 €", "active": false},
  { "name": "Nome Prodotto 2", "url": "assets/images/products/prod2.jpg", "brand": "brand 2", "price": "342,99 €", "active": true},
  { "name": "Nome Prodotto 3", "url": "assets/images/products/prod3.jpg", "brand": "brand 3", "price": "49,99 €", "active": false},
  { "name": "Nome Prodotto 1", "url": "assets/images/products/prod1.jpg", "brand": "brand 1", "price": "129,99 €", "active": false},
  { "name": "Nome Prodotto 2", "url": "assets/images/products/prod2.jpg", "brand": "brand 2", "price": "342,99 €", "active": false},
  { "name": "Nome Prodotto 3", "url": "assets/images/products/prod3.jpg", "brand": "brand 3", "price": "49,99 €", "active": false}
];
