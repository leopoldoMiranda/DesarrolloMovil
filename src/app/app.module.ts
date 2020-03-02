import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MedidasComponent } from './medidas/medidas.component';
import { DivisaComponent } from './divisa/divisa.component';
import { TemperaturaComponent } from './temperatura/temperatura.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    MedidasComponent,
    DivisaComponent,
    TemperaturaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
