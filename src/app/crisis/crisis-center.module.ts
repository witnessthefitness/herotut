import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrisisService } from './crisis.service';
import { CrisisCenterComponent } from './crisis-center.component';
import { CrisisCenterHomeComponent } from './crisis-center-home.component';
import { CrisisListComponent } from './crisis-list.component';
import { CrisisDetailComponent } from './crisis-detail.component';
import { CrisisCenterRoutingModule } from './crisis-center-routing.module';


@NgModule({
    imports: [
        CommonModule,
        CrisisCenterRoutingModule,
    ],
    declarations: [
        CrisisCenterComponent,
        CrisisCenterHomeComponent,
        CrisisListComponent,
        CrisisDetailComponent
    ],
    providers: [
        CrisisService
    ]
})
export class CrisisCenterModule {

}