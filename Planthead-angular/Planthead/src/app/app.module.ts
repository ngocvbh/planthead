import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PlantIdentifierComponent } from './plant-identifier/plant-identifier.component';
import { PlantIdentifierService } from './plant-identifier.service';

@NgModule({
  declarations: [
    AppComponent,
    PlantIdentifierComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PlantIdentifierService],
  bootstrap: [AppComponent]
})
export class AppModule { }
