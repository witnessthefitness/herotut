import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ContactModule } from './contact/contact.module';

import { HeroService } from './hero.service';
import { UserService } from './user.service';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HighlightDirective } from './highlight.directive';
import { DashboardComponent } from './dashboard.component';
import { TitleComponent } from './title.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ContactModule
  ],
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    HighlightDirective,
    TitleComponent,
    DashboardComponent,
  ],
  providers: [
    HeroService,
    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
