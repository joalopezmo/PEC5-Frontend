import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import{FormsModule} from '@angular/forms';
import { WineitemComponent } from './wineitem/wineitem.component';
import { WineNewComponent } from './wine-new/wine-new.component';

@NgModule({
  declarations: [
    AppComponent,
    WineitemComponent,
    WineNewComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
