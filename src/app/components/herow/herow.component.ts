import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'herow',
  styleUrls: [
    './herow.component.css',
  ],
  template: `
    <div class=herow>
      <div class="container">
        <h1>Ancora non sai cosa regalare?<br>
        Non ti preoccupare, ci siamo noi!</h1>
        <br>
        <h1 class="subtitle">Rispondi alla nostre semplici domande e noi ti suggeriremo il regalo perfetto per te!</h1>
        <br>
        <br>
        <a routerLink="/wizard"><button class="button button-white">Inizia il nostro Quiz</button></a>
      </div>
    </div>
    `
})

export class HerowComponent {}
