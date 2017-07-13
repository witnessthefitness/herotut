import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardRoutingModule } from './dashboard-routing.module';

import { DashboardComponent } from './dashboard.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        DashboardComponent
    ],
    exports: [

    ],
    providers: [

    ],
})
export class DashboardModule { }