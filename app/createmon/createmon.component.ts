import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService, UserService } from '../_services/index';
import {MainService} from "../_services/main.service";

@Component({
    moduleId: module.id,
    templateUrl: 'createmon.component.html'
})

export class CreatemonComponent {
    model: any = {};
    loading = false;

    constructor(
        private router: Router,
        private mainService: MainService,
        private alertService: AlertService) { }

    add() {
        console.log(JSON.stringify(this.model));
        this.mainService.addMonster(JSON.stringify(this.model));
        setTimeout(() => {
            this.router.navigate(['/monster']);
        },1000);
    }
}
