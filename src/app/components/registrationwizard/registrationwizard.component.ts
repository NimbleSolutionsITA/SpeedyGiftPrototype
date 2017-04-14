import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'registrationwizard',
  styleUrls: [
    './registrationwizard.component.css',
    '../../../assets/css/flaticon.css'
  ],
  templateUrl: 'registrationwizard.component.html'
})

export class RegistrationWizardComponent {
  public step = 1;

}
