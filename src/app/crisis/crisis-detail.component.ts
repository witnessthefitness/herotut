import { Component, OnInit } from '@angular/core';
import { Crisis, CrisisService } from './crisis.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';

@Component({
    templateUrl: './crisis-detail.component.html',
    styleUrls: ['./crisis-detail.component.css']
})
export class CrisisDetailComponent implements OnInit {
    crisis: Crisis;

    constructor(
        private crisisService: CrisisService,
        private route: ActivatedRoute) {

    }

    ngOnInit(): void {
        this.route.paramMap
            .switchMap((params: ParamMap) => this.crisisService.getCrisis(+params.get('id')))
            .subscribe((crisis: Crisis) => this.crisis = crisis);
    }
}