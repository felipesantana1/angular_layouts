import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeadCompComponent } from './head-comp/head-comp.component';
import { NavCompComponent } from './nav-comp/nav-comp.component';
import { MainCompComponent } from './main-comp/main-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadCompComponent,
    NavCompComponent,
    MainCompComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
