"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
// Services
var fm_game_service_1 = require("../service/fm-game.service");
// Components
var default_nav_menu_component_1 = require("./default-nav-menu.component");
var FMSharedModule = /** @class */ (function () {
    function FMSharedModule() {
    }
    FMSharedModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.NativeScriptRouterModule
            ],
            exports: [
                default_nav_menu_component_1.DefaultNavMenuComponent
            ],
            declarations: [
                default_nav_menu_component_1.DefaultNavMenuComponent
            ],
            providers: [
                fm_game_service_1.FMGameService
            ],
        })
    ], FMSharedModule);
    return FMSharedModule;
}());
exports.FMSharedModule = FMSharedModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNoYXJlZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFDekMsc0RBQXVFO0FBRXZFLFdBQVc7QUFDWCw4REFBMkQ7QUFFM0QsYUFBYTtBQUNiLDJFQUF1RTtBQWdCdkU7SUFBQTtJQUE4QixDQUFDO0lBQWxCLGNBQWM7UUFkMUIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLGlDQUF3QjthQUMzQjtZQUNELE9BQU8sRUFBRTtnQkFDTCxvREFBdUI7YUFDMUI7WUFDRCxZQUFZLEVBQUU7Z0JBQ1Ysb0RBQXVCO2FBQzFCO1lBQ0QsU0FBUyxFQUFFO2dCQUNQLCtCQUFhO2FBQ2hCO1NBQ0osQ0FBQztPQUNXLGNBQWMsQ0FBSTtJQUFELHFCQUFDO0NBQUEsQUFBL0IsSUFBK0I7QUFBbEIsd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcblxuLy8gU2VydmljZXNcbmltcG9ydCB7IEZNR2FtZVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlL2ZtLWdhbWUuc2VydmljZSc7XG5cbi8vIENvbXBvbmVudHNcbmltcG9ydCB7IERlZmF1bHROYXZNZW51Q29tcG9uZW50IH0gZnJvbSAnLi9kZWZhdWx0LW5hdi1tZW51LmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgRGVmYXVsdE5hdk1lbnVDb21wb25lbnRcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBEZWZhdWx0TmF2TWVudUNvbXBvbmVudFxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIEZNR2FtZVNlcnZpY2VcbiAgICBdLFxufSlcbmV4cG9ydCBjbGFzcyBGTVNoYXJlZE1vZHVsZSB7IH1cbiJdfQ==