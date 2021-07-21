import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TogglerModule } from '@shared';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TogglerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
