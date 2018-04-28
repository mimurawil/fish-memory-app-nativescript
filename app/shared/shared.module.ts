import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

// Services
import { FMGameService } from '../service/fm-game.service';

// Components
import { DefaultNavMenuComponent } from './default-nav-menu.component';

@NgModule({
    imports: [
        NativeScriptRouterModule
    ],
    exports: [
        DefaultNavMenuComponent
    ],
    declarations: [
        DefaultNavMenuComponent
    ],
    providers: [
        FMGameService
    ],
})
export class FMSharedModule { }
