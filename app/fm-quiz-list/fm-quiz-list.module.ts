import { NgModule } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';

// Telerik
import { NativeScriptUIListViewModule } from 'nativescript-ui-listview/angular/listview-directives';
import { NativeScriptUISideDrawerModule } from 'nativescript-ui-sidedrawer/angular/side-drawer-directives';

// Routing
import { FMQuizListRoutingModule } from './fm-quiz-list.routing';

// Services
import { FMQuizService } from '../service/fm-quiz.service';

// Components
import { FMSharedModule } from '../shared/shared.module';
import { FMQuizListComponent } from './fm-quiz-list.component';
import { FMQuizEditComponent } from '../fm-quiz-edit/fm-quiz-edit.component';
import { FMCardsPickModalComponent } from '../shared/cards-pick-modal.component';

@NgModule({
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        NativeScriptUIListViewModule,
        NativeScriptUISideDrawerModule,
        FMQuizListRoutingModule,
        FMSharedModule
    ],
    exports: [],
    declarations: [
        FMCardsPickModalComponent,
        FMQuizListComponent,
        FMQuizEditComponent
    ],
    providers: [
        FMQuizService
    ],
    entryComponents: [
        FMCardsPickModalComponent
    ]
})
export class FMQuizListModule { }
