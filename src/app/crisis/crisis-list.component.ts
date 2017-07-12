import { Component, OnInit } from '@angular/core';
import { Crisis, CrisisService } from './crisis.service';

@Component({
    selector: 'crisis-list',
    templateUrl: './crisis-list.component.html',
    styleUrls: ['./crisis-list.component.css'],
})
export class CrisisListComponent implements OnInit {
    crises: Promise<Crisis[]>;

    constructor(private crisisService: CrisisService){}

    ngOnInit():void  {
        this.crises = this.crisisService.getCrises();
    }
}