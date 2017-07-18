import { Component, OnInit } from '@angular/core';
import { Crisis, CrisisService } from './crisis.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'crisis-detail',
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
        //this.id = parseInt(this.route.snapshot.paramMap.get('id'), 10);
        // this.crisis = this.route.paramMap.switchMap((params: ParamMap) => {
        //     this.id = +params.get('id');
        //     debugger;
        //     return this.crisisService.getCrisis(this.id);
        // })
        this.route.paramMap
            .switchMap((params: ParamMap) => this.crisisService.getCrisis(+params.get('id')))
            .subscribe(crisis => {this.crisis = crisis; console.log(crisis)});
    }
}