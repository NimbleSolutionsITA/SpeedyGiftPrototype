import { Component } from '@angular/core';

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
  ]
})

export class WizardComponent {}
