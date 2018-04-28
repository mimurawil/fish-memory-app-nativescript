"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";
// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpModule } from "nativescript-angular/http";
// App Modules
var fm_game_quiz_module_1 = require("./fm-game-quiz/fm-game-quiz.module");
var fm_card_list_module_1 = require("./fm-card-list/fm-card-list.module");
var fm_quiz_list_module_1 = require("./fm-quiz-list/fm-quiz-list.module");
// Services
var fm_database_service_1 = require("./service/fm-database.service");
var fm_card_service_1 = require("./service/fm-card.service");
var fm_quiz_service_1 = require("./service/fm-quiz.service");
// Component
var fm_about_component_1 = require("./fm-about/fm-about.component");
var AppModule = /** @class */ (function () {
    /*
    Pass your application module to the bootstrapModule function located in main.ts to start your app
    */
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [
                app_component_1.AppComponent
            ],
            imports: [
                nativescript_module_1.NativeScriptModule,
                app_routing_1.AppRoutingModule,
                fm_game_quiz_module_1.FMGameQuizModule,
                fm_card_list_module_1.FMCardListModule,
                fm_quiz_list_module_1.FMQuizListModule
            ],
            declarations: [
                app_component_1.AppComponent,
                fm_about_component_1.FMAboutComponent
            ],
            providers: [
                fm_database_service_1.FMDatabaseService,
                fm_card_service_1.FMCardService,
                fm_quiz_service_1.FMQuizService
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
        /*
        Pass your application module to the bootstrapModule function located in main.ts to start your app
        */
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBQzlFLDZDQUFpRDtBQUNqRCxpREFBK0M7QUFFL0MsMkVBQTJFO0FBQzNFLHdFQUF3RTtBQUV4RSw2RUFBNkU7QUFDN0Usc0VBQXNFO0FBRXRFLGNBQWM7QUFDZCwwRUFBc0U7QUFDdEUsMEVBQXNFO0FBQ3RFLDBFQUFzRTtBQUV0RSxXQUFXO0FBQ1gscUVBQWtFO0FBQ2xFLDZEQUEwRDtBQUMxRCw2REFBMEQ7QUFFMUQsWUFBWTtBQUNaLG9FQUFpRTtBQThCakU7SUFIQTs7TUFFRTtJQUNGO0lBQXlCLENBQUM7SUFBYixTQUFTO1FBM0JyQixlQUFRLENBQUM7WUFDTixTQUFTLEVBQUU7Z0JBQ1AsNEJBQVk7YUFDZjtZQUNELE9BQU8sRUFBRTtnQkFDTCx3Q0FBa0I7Z0JBQ2xCLDhCQUFnQjtnQkFDaEIsc0NBQWdCO2dCQUNoQixzQ0FBZ0I7Z0JBQ2hCLHNDQUFnQjthQUNuQjtZQUNELFlBQVksRUFBRTtnQkFDViw0QkFBWTtnQkFDWixxQ0FBZ0I7YUFDbkI7WUFDRCxTQUFTLEVBQUU7Z0JBQ1AsdUNBQWlCO2dCQUNqQiwrQkFBYTtnQkFDYiwrQkFBYTthQUNoQjtZQUNELE9BQU8sRUFBRTtnQkFDTCx1QkFBZ0I7YUFDbkI7U0FDSixDQUFDO1FBQ0Y7O1VBRUU7T0FDVyxTQUFTLENBQUk7SUFBRCxnQkFBQztDQUFBLEFBQTFCLElBQTBCO0FBQWIsOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2FwcC5yb3V0aW5nXCI7XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5cbi8vIFVuY29tbWVudCBhbmQgYWRkIHRvIE5nTW9kdWxlIGltcG9ydHMgaWYgeW91IG5lZWQgdG8gdXNlIHR3by13YXkgYmluZGluZ1xuLy8gaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcblxuLy8gVW5jb21tZW50IGFuZCBhZGQgdG8gTmdNb2R1bGUgaW1wb3J0cyAgaWYgeW91IG5lZWQgdG8gdXNlIHRoZSBIVFRQIHdyYXBwZXJcbi8vIGltcG9ydCB7IE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cFwiO1xuXG4vLyBBcHAgTW9kdWxlc1xuaW1wb3J0IHsgRk1HYW1lUXVpek1vZHVsZSB9IGZyb20gXCIuL2ZtLWdhbWUtcXVpei9mbS1nYW1lLXF1aXoubW9kdWxlXCI7XG5pbXBvcnQgeyBGTUNhcmRMaXN0TW9kdWxlIH0gZnJvbSBcIi4vZm0tY2FyZC1saXN0L2ZtLWNhcmQtbGlzdC5tb2R1bGVcIjtcbmltcG9ydCB7IEZNUXVpekxpc3RNb2R1bGUgfSBmcm9tIFwiLi9mbS1xdWl6LWxpc3QvZm0tcXVpei1saXN0Lm1vZHVsZVwiO1xuXG4vLyBTZXJ2aWNlc1xuaW1wb3J0IHsgRk1EYXRhYmFzZVNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlL2ZtLWRhdGFiYXNlLnNlcnZpY2VcIjtcbmltcG9ydCB7IEZNQ2FyZFNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlL2ZtLWNhcmQuc2VydmljZVwiO1xuaW1wb3J0IHsgRk1RdWl6U2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2UvZm0tcXVpei5zZXJ2aWNlXCI7XG5cbi8vIENvbXBvbmVudFxuaW1wb3J0IHsgRk1BYm91dENvbXBvbmVudCB9IGZyb20gXCIuL2ZtLWFib3V0L2ZtLWFib3V0LmNvbXBvbmVudFwiO1xuXG5cbkBOZ01vZHVsZSh7XG4gICAgYm9vdHN0cmFwOiBbXG4gICAgICAgIEFwcENvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgICAgIEFwcFJvdXRpbmdNb2R1bGUsXG4gICAgICAgIEZNR2FtZVF1aXpNb2R1bGUsXG4gICAgICAgIEZNQ2FyZExpc3RNb2R1bGUsXG4gICAgICAgIEZNUXVpekxpc3RNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBBcHBDb21wb25lbnQsXG4gICAgICAgIEZNQWJvdXRDb21wb25lbnRcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBGTURhdGFiYXNlU2VydmljZSxcbiAgICAgICAgRk1DYXJkU2VydmljZSxcbiAgICAgICAgRk1RdWl6U2VydmljZVxuICAgIF0sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICAgXVxufSlcbi8qXG5QYXNzIHlvdXIgYXBwbGljYXRpb24gbW9kdWxlIHRvIHRoZSBib290c3RyYXBNb2R1bGUgZnVuY3Rpb24gbG9jYXRlZCBpbiBtYWluLnRzIHRvIHN0YXJ0IHlvdXIgYXBwXG4qL1xuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cbiJdfQ==