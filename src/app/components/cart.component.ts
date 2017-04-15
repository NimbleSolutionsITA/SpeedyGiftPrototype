import { Component } from '@angular/core';

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
  ]
})

export class CartComponent {}
