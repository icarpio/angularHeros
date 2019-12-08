import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {HeroesService} from '../../services/heroes.service'


@Component({
  selector: 'app-search-heros',
  templateUrl: './search-heros.component.html'
})
export class SearchHerosComponent implements OnInit {

  heroes:any[] = []
  word:string;

  constructor(private actiRoute:ActivatedRoute, private _heroesService:HeroesService,
              private router:Router) { }

  ngOnInit() {
    this.actiRoute.params.subscribe(params =>{
      this.word = params['word'];
       this.heroes = this._heroesService.searchHeros(params['word']);
    })
  }
  showHeroe(idx:number){
    this.router.navigate(['/heroe', idx]);
}

}
