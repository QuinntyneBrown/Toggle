import { Component } from '@angular/core';

@Component({
  selector: 'app-toggler',
  templateUrl: './toggler.component.html',
  styleUrls: ['./toggler.component.scss']
})
export class TogglerComponent {
  public hide:boolean = false;

  public toggle() {
    this.hide = !this.hide;
  }
}
