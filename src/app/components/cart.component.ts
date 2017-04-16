import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'cart',
  template: `
    <navbar></navbar>
    
    <carrello></carrello>
    
    <suggerimenti></suggerimenti>
    
    <footer></footer>
  `,
  styleUrls: [
    '../app.component.css'
  ],
  encapsulation: ViewEncapsulation.None
})

export class CartComponent {}
