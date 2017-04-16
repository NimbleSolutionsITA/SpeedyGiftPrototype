import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'wizard',
  template: `
    <navbar></navbar>
    
    <giftwizard></giftwizard>
    
    <css-carousel></css-carousel>
    
    <footer></footer>
  `,
  styleUrls: [
    '../app.component.css'
  ],
  encapsulation: ViewEncapsulation.None
})

export class WizardComponent {}
