import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatDividerModule } from '@angular/material/divider'; 
import { MatIconModule } from '@angular/material/icon'; 
import { MatSliderModule } from '@angular/material/slider'; 

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageComponent } from './page/page.component';
import { PersonalInfoComponent } from './page/personal-info/personal-info.component';
import { TypewriterCursorComponent } from './typewriter/cursor/cursor.component';
import { TypewriterTextComponent } from './typewriter/text/text.component';
import { SectionDividerComponent } from './page/section-divider/section-divider.component';
import { EntryComponent } from './page/entry/entry.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    TypewriterCursorComponent,
    PersonalInfoComponent,
    TypewriterTextComponent,
    SectionDividerComponent,
    EntryComponent,
    NavMenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, 
    MatDividerModule, 
    MatIconModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
