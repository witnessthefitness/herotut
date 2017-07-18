import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HeroListComponent } from './hero-list.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';

import { HeroRoutingModule } from './heroes-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HeroRoutingModule
    ],
    declarations: [
        HeroDetailComponent,
        HeroListComponent,
    ],
    exports: [

    ],
    providers: [
        HeroService
    ],
})
export class HeroesModule { }