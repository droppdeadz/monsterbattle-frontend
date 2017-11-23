import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService, UserService } from '../_services/index';
import {MainService} from "../_services/main.service";

@Component({
    moduleId: module.id,
    templateUrl: 'editmon.component.html'
})

export class EditmonComponent {
    model: any = {};
    loading = false;

    constructor(
        private router: Router,
        private mainService: MainService,
        private alertService: AlertService) { }

    edit() {
        console.log(this.model);
        this.mainService.editMonster(this.model.monstersName, JSON.stringify(this.model));
    }
}
