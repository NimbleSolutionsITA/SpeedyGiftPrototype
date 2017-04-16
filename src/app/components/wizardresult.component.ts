import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'wizardresult',
  template: `
    <navbar></navbar>
    
    <wizardresulthead></wizardresulthead>
    
    <wizardresultp></wizardresultp>
    
    <wizardresultinterest></wizardresultinterest>
    
    <wizardresulthero></wizardresulthero>
    
    <footer></footer>
  `,
  styleUrls: [
    '../app.component.css'
  ],
  encapsulation: ViewEncapsulation.None
})

export class WizardResultComponent {}
