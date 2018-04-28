"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
// Components
var fm_game_quiz_component_1 = require("./fm-game-quiz.component");
var routes = [
    { path: 'play/quiz', component: fm_game_quiz_component_1.FMGameQuizComponent },
    { path: 'play/quiz/:id', component: fm_game_quiz_component_1.FMGameQuizComponent },
];
var FMGameQuizRoutingModule = /** @class */ (function () {
    function FMGameQuizRoutingModule() {
    }
    FMGameQuizRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forChild(routes)],
            exports: [router_1.NativeScriptRouterModule],
        })
    ], FMGameQuizRoutingModule);
    return FMGameQuizRoutingModule;
}());
exports.FMGameQuizRoutingModule = FMGameQuizRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm0tZ2FtZS1xdWl6LnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmbS1nYW1lLXF1aXoucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUN6QyxzREFBdUU7QUFHdkUsYUFBYTtBQUNiLG1FQUErRDtBQUUvRCxJQUFNLE1BQU0sR0FBVztJQUNuQixFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLDRDQUFtQixFQUFFO0lBQ3JELEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUsNENBQW1CLEVBQUU7Q0FDNUQsQ0FBQztBQU1GO0lBQUE7SUFBdUMsQ0FBQztJQUEzQix1QkFBdUI7UUFKbkMsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3BELE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDO1NBQ3RDLENBQUM7T0FDVyx1QkFBdUIsQ0FBSTtJQUFELDhCQUFDO0NBQUEsQUFBeEMsSUFBd0M7QUFBM0IsMERBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG4vLyBDb21wb25lbnRzXG5pbXBvcnQgeyBGTUdhbWVRdWl6Q29tcG9uZW50IH0gZnJvbSAnLi9mbS1nYW1lLXF1aXouY29tcG9uZW50JztcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gICAgeyBwYXRoOiAncGxheS9xdWl6JywgY29tcG9uZW50OiBGTUdhbWVRdWl6Q29tcG9uZW50IH0sXG4gICAgeyBwYXRoOiAncGxheS9xdWl6LzppZCcsIGNvbXBvbmVudDogRk1HYW1lUXVpekNvbXBvbmVudCB9LFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyldLFxuICAgIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBGTUdhbWVRdWl6Um91dGluZ01vZHVsZSB7IH1cblxuIl19