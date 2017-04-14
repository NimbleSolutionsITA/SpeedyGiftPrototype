import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'wizardresulthero',
  styleUrls: [
    './wizardresulthero.component.css',
  ],
  template: `
    <div class=herow>
      <div class="container">
        <h1>Non era quello<br>
        che cercavi?</h1>
        <br>
        <h1 class="subtitle">Siamo sicuri che troverai il regalo perfetto per te!</h1>
        <br>
        <br>
        <a routerLink="/vetrina"><button class="btn btn-default">Consulta la vetrina</button></a>
        <a routerLink="/wizard"><button class="btn btn-default negative">Torna al QUIZ</button></a>
      </div>
    </div>
    `
})

export class WizardResultHeroComponent {}
