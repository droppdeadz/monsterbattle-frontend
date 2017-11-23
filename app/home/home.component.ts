import { Component, OnInit } from '@angular/core';

import { User } from '../_models/index';
import { UserService } from '../_services/index';
import {MainService} from "../_services/main.service";
import {Monster} from "../monster";
import {Router} from "@angular/router";

@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
    currentUser: User;
    users: User[] = [];
    monster: Monster[];
    model: any = {};
    loading = false;
    whichmon='';

    constructor(private userService: UserService,
                private mainService: MainService,
                private router: Router) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        this.loadAllUsers();
        this.mainService.getAllMonster().subscribe((monsters)=>{
            this.monster=monsters;

            console.log(monsters);
        });
    }

    deleteUser(id: number) {
        this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
    }

    private loadAllUsers() {
        this.userService.getAll().subscribe(users => { this.users = users; });
    }

    deleteMonster(monsterName: string) {
        this.mainService.deleteMonster(monsterName);
        setTimeout(() => {
            location.reload();
        }, 1000);
    }

    openEdit(value :string){
        this.whichmon=value;
    }

    edit(value: string) {
        console.log(this.model);
        console.log(value);
        this.mainService.editMonster(value, JSON.stringify(this.model));
        setTimeout(() => {
            location.reload();
        }, 1000);

    }
}