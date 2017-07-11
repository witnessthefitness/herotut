import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ContactService } from './contact.service';
import { ContactComponent } from './contact.component';
import { HighlightDirective } from './highlight.directive';
import { AwesomePipe } from './awesome.pipe';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
    ],
    declarations: [
        ContactComponent,
        HighlightDirective,
        AwesomePipe
    ],
    exports: [
        ContactComponent
    ],
    providers: [
        ContactService
    ]
})
export class ContactModule {

}