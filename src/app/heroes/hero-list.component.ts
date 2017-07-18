import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { Router, ActivatedRoute, ParamMap } from "@angular/router";

import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'my-heroes',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css'],
})
export class HeroListComponent implements OnInit {
  heroes: Observable<Hero[]>;
  // selectedHero: Hero;
  selectedId: number;

  constructor(
    private heroService: HeroService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.heroes = this.route.paramMap
      .switchMap((params: ParamMap) => {
        this.selectedId = +params.get('id');
        return this.heroService.getHeroes();
      })
    // this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.router.navigate(['/hero', hero.id]);
  }

  // getHeroes(): void {
  //   this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  // }

  isSelected(hero: Hero) {
    return hero.id === this.selectedId;
  }

  // gotoDetail(): void {
  //   this.router.navigate(['/detail', this.selectedHero.id]);
  // }
}