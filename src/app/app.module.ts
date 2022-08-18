import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatSliderModule } from '@angular/material/slider'; 

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageComponent } from './page/page.component';
import { CursorComponent } from './typewriter/cursor/cursor.component';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    CursorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, 
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
