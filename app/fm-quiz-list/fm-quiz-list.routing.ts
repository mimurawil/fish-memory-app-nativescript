import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { FMQuizListComponent } from './fm-quiz-list.component';
import { FMQuizEditComponent } from '../fm-quiz-edit/fm-quiz-edit.component';

const routes: Routes = [
    { path: 'quizzes', component: FMQuizListComponent },
    { path: 'quizzes/select-play', component: FMQuizListComponent },
    { path: 'quizzes/new', component: FMQuizEditComponent },
    { path: 'quizzes/:id', component: FMQuizEditComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class FMQuizListRoutingModule { }
