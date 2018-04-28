import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { Routes } from '@angular/router';
import { FMAboutComponent } from './fm-about/fm-about.component';

const routes: Routes = [
    { path: '', redirectTo: '/quizzes', pathMatch: 'full' },
    { path: 'about', component: FMAboutComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }