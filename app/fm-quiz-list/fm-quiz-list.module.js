"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var forms_1 = require("nativescript-angular/forms");
// Telerik
var listview_directives_1 = require("nativescript-ui-listview/angular/listview-directives");
var side_drawer_directives_1 = require("nativescript-ui-sidedrawer/angular/side-drawer-directives");
// Routing
var fm_quiz_list_routing_1 = require("./fm-quiz-list.routing");
// Services
var fm_quiz_service_1 = require("../service/fm-quiz.service");
// Components
var shared_module_1 = require("../shared/shared.module");
var fm_quiz_list_component_1 = require("./fm-quiz-list.component");
var fm_quiz_edit_component_1 = require("../fm-quiz-edit/fm-quiz-edit.component");
var cards_pick_modal_component_1 = require("../shared/cards-pick-modal.component");
var FMQuizListModule = /** @class */ (function () {
    function FMQuizListModule() {
    }
    FMQuizListModule = __decorate([
        core_1.NgModule({
            imports: [
                nativescript_module_1.NativeScriptModule,
                forms_1.NativeScriptFormsModule,
                listview_directives_1.NativeScriptUIListViewModule,
                side_drawer_directives_1.NativeScriptUISideDrawerModule,
                fm_quiz_list_routing_1.FMQuizListRoutingModule,
                shared_module_1.FMSharedModule
            ],
            exports: [],
            declarations: [
                cards_pick_modal_component_1.FMCardsPickModalComponent,
                fm_quiz_list_component_1.FMQuizListComponent,
                fm_quiz_edit_component_1.FMQuizEditComponent
            ],
            providers: [
                fm_quiz_service_1.FMQuizService
            ],
            entryComponents: [
                cards_pick_modal_component_1.FMCardsPickModalComponent
            ]
        })
    ], FMQuizListModule);
    return FMQuizListModule;
}());
exports.FMQuizListModule = FMQuizListModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm0tcXVpei1saXN0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZtLXF1aXotbGlzdC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFDekMsZ0ZBQThFO0FBQzlFLG9EQUFxRTtBQUVyRSxVQUFVO0FBQ1YsNEZBQW9HO0FBQ3BHLG9HQUEyRztBQUUzRyxVQUFVO0FBQ1YsK0RBQWlFO0FBRWpFLFdBQVc7QUFDWCw4REFBMkQ7QUFFM0QsYUFBYTtBQUNiLHlEQUF5RDtBQUN6RCxtRUFBK0Q7QUFDL0QsaUZBQTZFO0FBQzdFLG1GQUFpRjtBQXdCakY7SUFBQTtJQUFnQyxDQUFDO0lBQXBCLGdCQUFnQjtRQXRCNUIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLHdDQUFrQjtnQkFDbEIsK0JBQXVCO2dCQUN2QixrREFBNEI7Z0JBQzVCLHVEQUE4QjtnQkFDOUIsOENBQXVCO2dCQUN2Qiw4QkFBYzthQUNqQjtZQUNELE9BQU8sRUFBRSxFQUFFO1lBQ1gsWUFBWSxFQUFFO2dCQUNWLHNEQUF5QjtnQkFDekIsNENBQW1CO2dCQUNuQiw0Q0FBbUI7YUFDdEI7WUFDRCxTQUFTLEVBQUU7Z0JBQ1AsK0JBQWE7YUFDaEI7WUFDRCxlQUFlLEVBQUU7Z0JBQ2Isc0RBQXlCO2FBQzVCO1NBQ0osQ0FBQztPQUNXLGdCQUFnQixDQUFJO0lBQUQsdUJBQUM7Q0FBQSxBQUFqQyxJQUFpQztBQUFwQiw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZSc7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zJztcblxuLy8gVGVsZXJpa1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlMaXN0Vmlld01vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC11aS1saXN0dmlldy9hbmd1bGFyL2xpc3R2aWV3LWRpcmVjdGl2ZXMnO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXIvYW5ndWxhci9zaWRlLWRyYXdlci1kaXJlY3RpdmVzJztcblxuLy8gUm91dGluZ1xuaW1wb3J0IHsgRk1RdWl6TGlzdFJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL2ZtLXF1aXotbGlzdC5yb3V0aW5nJztcblxuLy8gU2VydmljZXNcbmltcG9ydCB7IEZNUXVpelNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlL2ZtLXF1aXouc2VydmljZSc7XG5cbi8vIENvbXBvbmVudHNcbmltcG9ydCB7IEZNU2hhcmVkTW9kdWxlIH0gZnJvbSAnLi4vc2hhcmVkL3NoYXJlZC5tb2R1bGUnO1xuaW1wb3J0IHsgRk1RdWl6TGlzdENvbXBvbmVudCB9IGZyb20gJy4vZm0tcXVpei1saXN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGTVF1aXpFZGl0Q29tcG9uZW50IH0gZnJvbSAnLi4vZm0tcXVpei1lZGl0L2ZtLXF1aXotZWRpdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRk1DYXJkc1BpY2tNb2RhbENvbXBvbmVudCB9IGZyb20gJy4uL3NoYXJlZC9jYXJkcy1waWNrLW1vZGFsLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRVSUxpc3RWaWV3TW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRVSVNpZGVEcmF3ZXJNb2R1bGUsXG4gICAgICAgIEZNUXVpekxpc3RSb3V0aW5nTW9kdWxlLFxuICAgICAgICBGTVNoYXJlZE1vZHVsZVxuICAgIF0sXG4gICAgZXhwb3J0czogW10sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEZNQ2FyZHNQaWNrTW9kYWxDb21wb25lbnQsXG4gICAgICAgIEZNUXVpekxpc3RDb21wb25lbnQsXG4gICAgICAgIEZNUXVpekVkaXRDb21wb25lbnRcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBGTVF1aXpTZXJ2aWNlXG4gICAgXSxcbiAgICBlbnRyeUNvbXBvbmVudHM6IFtcbiAgICAgICAgRk1DYXJkc1BpY2tNb2RhbENvbXBvbmVudFxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgRk1RdWl6TGlzdE1vZHVsZSB7IH1cbiJdfQ==