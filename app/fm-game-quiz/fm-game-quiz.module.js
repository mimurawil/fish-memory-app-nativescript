"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
// Routing
var fm_game_quiz_routing_1 = require("./fm-game-quiz.routing");
// Services 
var fm_game_service_1 = require("../service/fm-game.service");
var fm_statistics_service_1 = require("../service/fm-statistics.service");
// Components
var fm_game_quiz_component_1 = require("./fm-game-quiz.component");
var fm_card_component_1 = require("../fm-card/fm-card.component");
var FMGameQuizModule = /** @class */ (function () {
    function FMGameQuizModule() {
    }
    FMGameQuizModule = __decorate([
        core_1.NgModule({
            imports: [
                nativescript_module_1.NativeScriptModule,
                fm_game_quiz_routing_1.FMGameQuizRoutingModule,
            ],
            exports: [],
            declarations: [
                fm_game_quiz_component_1.FMGameQuizComponent,
                fm_card_component_1.FMCardComponent
            ],
            providers: [
                fm_game_service_1.FMGameService,
                fm_statistics_service_1.FMStatisticsService
            ],
        })
    ], FMGameQuizModule);
    return FMGameQuizModule;
}());
exports.FMGameQuizModule = FMGameQuizModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm0tZ2FtZS1xdWl6Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZtLWdhbWUtcXVpei5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFDekMsZ0ZBQThFO0FBRTlFLFVBQVU7QUFDViwrREFBaUU7QUFFakUsWUFBWTtBQUNaLDhEQUEyRDtBQUMzRCwwRUFBdUU7QUFFdkUsYUFBYTtBQUNiLG1FQUErRDtBQUMvRCxrRUFBK0Q7QUFpQi9EO0lBQUE7SUFBZ0MsQ0FBQztJQUFwQixnQkFBZ0I7UUFmNUIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLHdDQUFrQjtnQkFDbEIsOENBQXVCO2FBQzFCO1lBQ0QsT0FBTyxFQUFFLEVBQUU7WUFDWCxZQUFZLEVBQUU7Z0JBQ1YsNENBQW1CO2dCQUNuQixtQ0FBZTthQUNsQjtZQUNELFNBQVMsRUFBRTtnQkFDUCwrQkFBYTtnQkFDYiwyQ0FBbUI7YUFDdEI7U0FDSixDQUFDO09BQ1csZ0JBQWdCLENBQUk7SUFBRCx1QkFBQztDQUFBLEFBQWpDLElBQWlDO0FBQXBCLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlJztcblxuLy8gUm91dGluZ1xuaW1wb3J0IHsgRk1HYW1lUXVpelJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL2ZtLWdhbWUtcXVpei5yb3V0aW5nJztcblxuLy8gU2VydmljZXMgXG5pbXBvcnQgeyBGTUdhbWVTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZS9mbS1nYW1lLnNlcnZpY2UnO1xuaW1wb3J0IHsgRk1TdGF0aXN0aWNzU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2UvZm0tc3RhdGlzdGljcy5zZXJ2aWNlJztcblxuLy8gQ29tcG9uZW50c1xuaW1wb3J0IHsgRk1HYW1lUXVpekNvbXBvbmVudCB9IGZyb20gJy4vZm0tZ2FtZS1xdWl6LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGTUNhcmRDb21wb25lbnQgfSBmcm9tICcuLi9mbS1jYXJkL2ZtLWNhcmQuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICAgICAgRk1HYW1lUXVpelJvdXRpbmdNb2R1bGUsXG4gICAgXSxcbiAgICBleHBvcnRzOiBbXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgRk1HYW1lUXVpekNvbXBvbmVudCxcbiAgICAgICAgRk1DYXJkQ29tcG9uZW50XG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgRk1HYW1lU2VydmljZSxcbiAgICAgICAgRk1TdGF0aXN0aWNzU2VydmljZVxuICAgIF0sXG59KVxuZXhwb3J0IGNsYXNzIEZNR2FtZVF1aXpNb2R1bGUgeyB9XG4iXX0=