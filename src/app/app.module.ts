import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CityModule } from './city/city.module';
import { IndexComponent } from './city/index/index.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CityModule,
    HttpClientModule
  ],
  providers: [],
  exports:[
    CityModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
