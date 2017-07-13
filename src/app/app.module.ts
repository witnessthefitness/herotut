import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
//debug
import { Router } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { ContactModule } from './contact/contact.module';
import { CrisisModule } from './crisis/crisis.module';
import { HeroesModule } from './heroes/heroes.module';
import { DashboardModule } from './dashboard/dashboard.module';

import { UserService } from './user.service';

import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
import { TitleComponent } from './title.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule, //move to last position
    ContactModule,
    CrisisModule,
    HeroesModule,
    DashboardModule,
    
  ],
  declarations: [
    AppComponent,
    HighlightDirective,
    TitleComponent,
    PageNotFoundComponent,
  ],
  providers: [
    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  //debug
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}
