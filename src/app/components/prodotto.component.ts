import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'prodotto',
  template: `
    <navbar></navbar>
    
    <productinfo></productinfo>
    
    <css-carousel></css-carousel>
    
    <footer></footer>
  `,
  styleUrls: [
    '../app.component.css'
  ],
  encapsulation: ViewEncapsulation.None
})

export class ProdottoComponent {}
