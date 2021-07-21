import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TogglerComponent } from './toggler.component';
import { ToggleButtonComponent } from './toggle-button/toggle-button.component';



@NgModule({
  declarations: [
    TogglerComponent,
    ToggleButtonComponent
  ],
  exports: [
    TogglerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TogglerModule { }
