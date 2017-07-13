import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesListComponent } from './heroes/heroes-list.component';
import { HeroDetailComponent } from './heroes/hero-detail.component';
import { ContactComponent } from './contact/contact.component';
import { CrisisListComponent } from './crisis/crisis-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'detail/:id', component: HeroDetailComponent },
    { path: 'heroes', component: HeroesListComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'crisis-center', component: CrisisListComponent },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    // { path: '**', component: PageNotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { enableTracing: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }