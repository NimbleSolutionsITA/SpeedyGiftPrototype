import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'returning',
  template: `
    <navbar></navbar>

    <returninghead></returninghead>
    
    <returninguser></returninguser>
    
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

export class ReturningComponent {}
