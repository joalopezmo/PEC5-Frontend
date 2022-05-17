import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WineitemComponent } from './wineitem/wineitem.component';
import { FormCreatorComponent } from './form-creator/form-creator.component';

@NgModule({
  declarations: [
    AppComponent,
    WineitemComponent,
    FormCreatorComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
