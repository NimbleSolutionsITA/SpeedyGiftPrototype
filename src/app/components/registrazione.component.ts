import { Component } from '@angular/core';

@Component({
  selector: 'registrazione',
  template: `
    <navbar></navbar>
    
    <registrationwizard></registrationwizard>
    
    <footer></footer>
  `,
  styleUrls: [
    '../app.component.css'
  ]
})

export class RegistrazioneComponent {}
