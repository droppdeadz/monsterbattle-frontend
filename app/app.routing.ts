import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { AuthGuard } from './_guards/index';
import {CreatemonComponent} from "./createmon/createmon.component";
import {EditmonComponent} from "./editmon/editmon.component";

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'monster', component: HomeComponent},
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'addmonster', component: CreatemonComponent},
    { path: 'editmonster', component: EditmonComponent},
    // otherwise redirect to home
    { path: '**', redirectTo: 'monster' }
];

export const routing = RouterModule.forRoot(appRoutes);