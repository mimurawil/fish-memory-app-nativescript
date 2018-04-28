import { NgModule } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';

// Telerik UI
import { NativeScriptUIListViewModule } from 'nativescript-ui-listview/angular/listview-directives';
import { NativeScriptUISideDrawerModule } from 'nativescript-ui-sidedrawer/angular/side-drawer-directives';

// Routing
import { FMCardListRoutingModule } from './fm-card-list.routing';

// Services
import { FMCardService } from '../service/fm-card.service';

// Components
import { FMSharedModule } from '../shared/shared.module';
import { FMCardListComponent } from './fm-card-list.component';
import { FMCardEditComponent } from '../fm-card-edit/fm-card-edit.component';


@NgModule({
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        NativeScriptUIListViewModule,
        NativeScriptUISideDrawerModule,
        FMCardListRoutingModule,
        FMSharedModule
    ],
    exports: [],
    declarations: [
        FMCardListComponent,
        FMCardEditComponent
    ],
    providers: [
        FMCardService
    ],
})
export class FMCardListModule { }
