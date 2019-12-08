import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './components/shared/home/home.component';
import { HeroesComponent } from './components/shared/heroes/heroes.component';
import { AboutComponent } from './components/shared/about/about.component';
import {HeroeComponent} from './components/shared/heroe/heroe.component';
import { SearchHerosComponent } from './components/shared/search-heros/search-heros.component';

const APP_ROUTES: Routes= [
    {path:'home',component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'heroes',component:HeroesComponent},
    {path:'heroe/:id',component:HeroeComponent},
    {path:'search/:word',component:SearchHerosComponent},
    {path:'**',pathMatch:'full', redirectTo:'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);