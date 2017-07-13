import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HeroesListComponent } from './heroes-list.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';


@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        HeroDetailComponent,
        HeroesListComponent,
    ],
    exports: [

    ],
    providers: [
        HeroService
    ],
})
export class HeroesModule { }