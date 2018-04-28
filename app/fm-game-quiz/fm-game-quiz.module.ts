import { NgModule } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';

// Routing
import { FMGameQuizRoutingModule } from './fm-game-quiz.routing';

// Services 
import { FMGameService } from '../service/fm-game.service';
import { FMStatisticsService } from '../service/fm-statistics.service';

// Components
import { FMGameQuizComponent } from './fm-game-quiz.component';
import { FMCardComponent } from '../fm-card/fm-card.component';

@NgModule({
    imports: [
        NativeScriptModule,
        FMGameQuizRoutingModule,
    ],
    exports: [],
    declarations: [
        FMGameQuizComponent,
        FMCardComponent
    ],
    providers: [
        FMGameService,
        FMStatisticsService
    ],
})
export class FMGameQuizModule { }
