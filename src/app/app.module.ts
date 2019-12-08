import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//rutas
import {APP_ROUTING} from './app.routes'

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/shared/home/home.component';
import { HeroesComponent } from './components/shared/heroes/heroes.component';
import { AboutComponent } from './components/shared/about/about.component';
import {HeroeComponent} from './components/shared/heroe/heroe.component'

import {HeroesService} from './components/services/heroes.service';
import { SearchHerosComponent } from './components/shared/search-heros/search-heros.component';
import { HeroCardComponent } from './components/shared/hero-card/hero-card.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HeroesComponent,
    AboutComponent,
    HeroeComponent,
    SearchHerosComponent,
    HeroCardComponent
    
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [HeroesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
