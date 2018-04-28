import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { Routes } from '@angular/router';

// Components
import { FMGameQuizComponent } from './fm-game-quiz.component';

const routes: Routes = [
    { path: 'play/quiz', component: FMGameQuizComponent },
    { path: 'play/quiz/:id', component: FMGameQuizComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule],
})
export class FMGameQuizRoutingModule { }

