import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { Routes } from '@angular/router';

// Components
import { FMCardListComponent } from './fm-card-list.component';
import { FMCardEditComponent } from '../fm-card-edit/fm-card-edit.component';


const routes: Routes = [
    { path: 'cards', component: FMCardListComponent },
    { path: 'cards/new', component: FMCardEditComponent },
    { path: 'cards/:id', component: FMCardEditComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule],
})
export class FMCardListRoutingModule { }

