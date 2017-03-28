import {Component, ContentChild  } from '@angular/core';

@Component({ selector: 'show-hide-container',
  template: `<ng-content></ng-content>
            <a (click)="toggleShow()"><span class="glyphicon glyphicon-eye-open" style="display: inline;"></span></a>`,
  styles: [`
  span.glyphicon.glyphicon-eye-open {
    float: right;
    top: -25px;
    margin-right: 15px;
    color: #777;
  }
`]
})
export class ShowHideComponent
{
  show = false;

  @ContentChild('showhideinput') input;

  constructor(){}

  toggleShow()
  {
    this.show = !this.show;
    console.log(this.input);
    if (this.show){
      this.input.nativeElement.type='text';
    }
    else {
      this.input.nativeElement.type='password';
    }
  }
}
