import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'home',
  template: `
    <navbar></navbar>

    <hero></hero>
    
    <videop></videop>
    
    <trends></trends>
    
    <css-carousel></css-carousel>
    
    <herow></herow>
    
    <footer></footer>
  `,
  styleUrls: [
    '../app.component.css'
  ],
  encapsulation: ViewEncapsulation.None
})

export class HomeComponent {}
