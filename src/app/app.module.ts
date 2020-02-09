import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ResortsListComponent } from './weather/resorts-list/resorts-list.component';
import { WeatherComponent } from './weather/weather.component';
import { TemperatureComponent } from './weather/temperature/temperature.component';
import { FollowersComponent } from './weather/followers/followers.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ResortsListComponent,
    WeatherComponent,
    TemperatureComponent,
    FollowersComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
