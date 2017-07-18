import { Component, OnInit } from '@angular/core';
import { Crisis, CrisisService } from './crisis.service';

import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
    selector: 'crisis-list',
    templateUrl: './crisis-list.component.html',
    styleUrls: ['./crisis-list.component.css'],
})
export class CrisisListComponent implements OnInit {
    crises: Promise<Crisis[]>;
    selectedId: number;

    constructor(
        private crisisService: CrisisService,
        private route: ActivatedRoute,
        private router: Router) { }

    ngOnInit(): void {
        this.crises = this.crisisService.getCrises();
    }

    onSelect(crisis: Crisis): void {
        this.selectedId = crisis.id;
        this.router.navigate([crisis.id], { relativeTo: this.route });
    }

    isSelected(crisis: Crisis): boolean {
        return this.selectedId === crisis.id;
    }
}