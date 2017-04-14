import { Component } from '@angular/core';

@Component({
  selector: 'vetrina',
  template: `
    <navbar></navbar>
    
    <vetrinahead></vetrinahead>
    
    <filtri></filtri>
    
    <vetrinap></vetrinap>
    
    <footer></footer>
  `,
  styleUrls: [
    '../app.component.css'
  ]
})

export class VetrinaComponent {}
