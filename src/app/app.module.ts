import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ConfComponent } from './components/conf/conf.component';
import { MainComponent } from './components/main/main.component';
import { SpecCityComponent } from './components/spec-city/spec-city.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { SetupComponent } from './setup/setup.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ConfComponent,
    MainComponent,
    SpecCityComponent,
    PagenotfoundComponent,
    SetupComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
