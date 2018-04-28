"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var forms_1 = require("nativescript-angular/forms");
// Telerik UI
var listview_directives_1 = require("nativescript-ui-listview/angular/listview-directives");
var side_drawer_directives_1 = require("nativescript-ui-sidedrawer/angular/side-drawer-directives");
// Routing
var fm_card_list_routing_1 = require("./fm-card-list.routing");
// Services
var fm_card_service_1 = require("../service/fm-card.service");
// Components
var shared_module_1 = require("../shared/shared.module");
var fm_card_list_component_1 = require("./fm-card-list.component");
var fm_card_edit_component_1 = require("../fm-card-edit/fm-card-edit.component");
var FMCardListModule = /** @class */ (function () {
    function FMCardListModule() {
    }
    FMCardListModule = __decorate([
        core_1.NgModule({
            imports: [
                nativescript_module_1.NativeScriptModule,
                forms_1.NativeScriptFormsModule,
                listview_directives_1.NativeScriptUIListViewModule,
                side_drawer_directives_1.NativeScriptUISideDrawerModule,
                fm_card_list_routing_1.FMCardListRoutingModule,
                shared_module_1.FMSharedModule
            ],
            exports: [],
            declarations: [
                fm_card_list_component_1.FMCardListComponent,
                fm_card_edit_component_1.FMCardEditComponent
            ],
            providers: [
                fm_card_service_1.FMCardService
            ],
        })
    ], FMCardListModule);
    return FMCardListModule;
}());
exports.FMCardListModule = FMCardListModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm0tY2FyZC1saXN0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZtLWNhcmQtbGlzdC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFDekMsZ0ZBQThFO0FBQzlFLG9EQUFxRTtBQUVyRSxhQUFhO0FBQ2IsNEZBQW9HO0FBQ3BHLG9HQUEyRztBQUUzRyxVQUFVO0FBQ1YsK0RBQWlFO0FBRWpFLFdBQVc7QUFDWCw4REFBMkQ7QUFFM0QsYUFBYTtBQUNiLHlEQUF5RDtBQUN6RCxtRUFBK0Q7QUFDL0QsaUZBQTZFO0FBcUI3RTtJQUFBO0lBQWdDLENBQUM7SUFBcEIsZ0JBQWdCO1FBbEI1QixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUU7Z0JBQ0wsd0NBQWtCO2dCQUNsQiwrQkFBdUI7Z0JBQ3ZCLGtEQUE0QjtnQkFDNUIsdURBQThCO2dCQUM5Qiw4Q0FBdUI7Z0JBQ3ZCLDhCQUFjO2FBQ2pCO1lBQ0QsT0FBTyxFQUFFLEVBQUU7WUFDWCxZQUFZLEVBQUU7Z0JBQ1YsNENBQW1CO2dCQUNuQiw0Q0FBbUI7YUFDdEI7WUFDRCxTQUFTLEVBQUU7Z0JBQ1AsK0JBQWE7YUFDaEI7U0FDSixDQUFDO09BQ1csZ0JBQWdCLENBQUk7SUFBRCx1QkFBQztDQUFBLEFBQWpDLElBQWlDO0FBQXBCLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXMnO1xuXG4vLyBUZWxlcmlrIFVJXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSUxpc3RWaWV3TW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3L2FuZ3VsYXIvbGlzdHZpZXctZGlyZWN0aXZlcyc7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSVNpZGVEcmF3ZXJNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlci9hbmd1bGFyL3NpZGUtZHJhd2VyLWRpcmVjdGl2ZXMnO1xuXG4vLyBSb3V0aW5nXG5pbXBvcnQgeyBGTUNhcmRMaXN0Um91dGluZ01vZHVsZSB9IGZyb20gJy4vZm0tY2FyZC1saXN0LnJvdXRpbmcnO1xuXG4vLyBTZXJ2aWNlc1xuaW1wb3J0IHsgRk1DYXJkU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2UvZm0tY2FyZC5zZXJ2aWNlJztcblxuLy8gQ29tcG9uZW50c1xuaW1wb3J0IHsgRk1TaGFyZWRNb2R1bGUgfSBmcm9tICcuLi9zaGFyZWQvc2hhcmVkLm1vZHVsZSc7XG5pbXBvcnQgeyBGTUNhcmRMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9mbS1jYXJkLWxpc3QuY29tcG9uZW50JztcbmltcG9ydCB7IEZNQ2FyZEVkaXRDb21wb25lbnQgfSBmcm9tICcuLi9mbS1jYXJkLWVkaXQvZm0tY2FyZC1lZGl0LmNvbXBvbmVudCc7XG5cblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJTGlzdFZpZXdNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJU2lkZURyYXdlck1vZHVsZSxcbiAgICAgICAgRk1DYXJkTGlzdFJvdXRpbmdNb2R1bGUsXG4gICAgICAgIEZNU2hhcmVkTW9kdWxlXG4gICAgXSxcbiAgICBleHBvcnRzOiBbXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgRk1DYXJkTGlzdENvbXBvbmVudCxcbiAgICAgICAgRk1DYXJkRWRpdENvbXBvbmVudFxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIEZNQ2FyZFNlcnZpY2VcbiAgICBdLFxufSlcbmV4cG9ydCBjbGFzcyBGTUNhcmRMaXN0TW9kdWxlIHsgfVxuIl19