"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var FMAboutComponent = /** @class */ (function () {
    function FMAboutComponent(routerExtentions) {
        this.routerExtentions = routerExtentions;
    }
    FMAboutComponent.prototype.ngOnInit = function () { };
    // Event Listeners
    FMAboutComponent.prototype.goBack = function () {
        this.routerExtentions.backToPreviousPage();
    };
    FMAboutComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'fm-about',
            templateUrl: 'fm-about.component.html'
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions])
    ], FMAboutComponent);
    return FMAboutComponent;
}());
exports.FMAboutComponent = FMAboutComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm0tYWJvdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZm0tYWJvdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELHNEQUErRDtBQVEvRDtJQUNJLDBCQUFvQixnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUFJLENBQUM7SUFFM0QsbUNBQVEsR0FBUixjQUFhLENBQUM7SUFFZCxrQkFBa0I7SUFDWCxpQ0FBTSxHQUFiO1FBQ0ksSUFBSSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDL0MsQ0FBQztJQVJRLGdCQUFnQjtRQU41QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFdBQVcsRUFBRSx5QkFBeUI7U0FDekMsQ0FBQzt5Q0FHd0MseUJBQWdCO09BRDdDLGdCQUFnQixDQVM1QjtJQUFELHVCQUFDO0NBQUEsQUFURCxJQVNDO0FBVFksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnZm0tYWJvdXQnLFxuICAgIHRlbXBsYXRlVXJsOiAnZm0tYWJvdXQuY29tcG9uZW50Lmh0bWwnXG59KVxuXG5leHBvcnQgY2xhc3MgRk1BYm91dENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXJFeHRlbnRpb25zOiBSb3V0ZXJFeHRlbnNpb25zKSB7IH1cblxuICAgIG5nT25Jbml0KCkgeyB9XG5cbiAgICAvLyBFdmVudCBMaXN0ZW5lcnNcbiAgICBwdWJsaWMgZ29CYWNrKCkge1xuICAgICAgICB0aGlzLnJvdXRlckV4dGVudGlvbnMuYmFja1RvUHJldmlvdXNQYWdlKCk7XG4gICAgfVxufSJdfQ==