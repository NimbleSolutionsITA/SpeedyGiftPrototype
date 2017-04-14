import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'giftwizard',
  styleUrls: [
    './giftwizard.component.css',
    '../../../assets/css/flaticon.css'
  ],
  templateUrl: 'giftwizard.component.html'
})

export class GiftWizardComponent {
  public step = 1;

}
