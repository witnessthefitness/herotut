import { Component, OnInit } from '@angular/core';
// import { Crisis, CrisisService } from './crisis.service';
import { ActivatedRoute }    from '@angular/router';

@Component({
    selector: 'crisis-detail',
    templateUrl: './crisis-detail.component.html',
    styleUrls: ['./crisis-detail.component.css']
})
export class CrisisDetailComponent implements OnInit {
    id: number;

    constructor(
        // private crisisService: CrisisService,
        private route: ActivatedRoute) {

    }

    ngOnInit(): void {
        this.id = parseInt(this.route.snapshot.paramMap.get('id'), 10);
    }
}