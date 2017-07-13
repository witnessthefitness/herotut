import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ContactModule } from './contact/contact.module';
import { CrisisModule } from './crisis/crisis.module';

import { HeroService } from './hero.service';
import { UserService } from './user.service';

import { AppComponent } from './app.component';
import { HeroesListComponent } from './heroes-list.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HighlightDirective } from './highlight.directive';
import { DashboardComponent } from './dashboard.component';
import { TitleComponent } from './title.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ContactModule,
    CrisisModule,
  ],
  declarations: [
    AppComponent,
    HeroesListComponent,
    HeroDetailComponent,
    HighlightDirective,
    TitleComponent,
    DashboardComponent,
    PageNotFoundComponent,
  ],
  providers: [
    HeroService,
    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
