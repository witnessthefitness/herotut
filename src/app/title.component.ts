import { Component, Input, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
    selector: 'app-title',
    templateUrl: './title.component.html'
})
export class TitleComponent implements OnInit {
    @Input() title = '';
    @Input() subtitle = '';
    user = '';

    constructor(private userService: UserService) {

    }

    ngOnInit(): void {
        this.user = this.userService.userName;
    }
}