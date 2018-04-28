"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
// Components
var fm_card_list_component_1 = require("./fm-card-list.component");
var fm_card_edit_component_1 = require("../fm-card-edit/fm-card-edit.component");
var routes = [
    { path: 'cards', component: fm_card_list_component_1.FMCardListComponent },
    { path: 'cards/new', component: fm_card_edit_component_1.FMCardEditComponent },
    { path: 'cards/:id', component: fm_card_edit_component_1.FMCardEditComponent }
];
var FMCardListRoutingModule = /** @class */ (function () {
    function FMCardListRoutingModule() {
    }
    FMCardListRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forChild(routes)],
            exports: [router_1.NativeScriptRouterModule],
        })
    ], FMCardListRoutingModule);
    return FMCardListRoutingModule;
}());
exports.FMCardListRoutingModule = FMCardListRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm0tY2FyZC1saXN0LnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmbS1jYXJkLWxpc3Qucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUN6QyxzREFBdUU7QUFHdkUsYUFBYTtBQUNiLG1FQUErRDtBQUMvRCxpRkFBNkU7QUFHN0UsSUFBTSxNQUFNLEdBQVc7SUFDbkIsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSw0Q0FBbUIsRUFBRTtJQUNqRCxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLDRDQUFtQixFQUFFO0lBQ3JELEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsNENBQW1CLEVBQUU7Q0FDeEQsQ0FBQztBQU1GO0lBQUE7SUFBdUMsQ0FBQztJQUEzQix1QkFBdUI7UUFKbkMsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3BELE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDO1NBQ3RDLENBQUM7T0FDVyx1QkFBdUIsQ0FBSTtJQUFELDhCQUFDO0NBQUEsQUFBeEMsSUFBd0M7QUFBM0IsMERBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG4vLyBDb21wb25lbnRzXG5pbXBvcnQgeyBGTUNhcmRMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9mbS1jYXJkLWxpc3QuY29tcG9uZW50JztcbmltcG9ydCB7IEZNQ2FyZEVkaXRDb21wb25lbnQgfSBmcm9tICcuLi9mbS1jYXJkLWVkaXQvZm0tY2FyZC1lZGl0LmNvbXBvbmVudCc7XG5cblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gICAgeyBwYXRoOiAnY2FyZHMnLCBjb21wb25lbnQ6IEZNQ2FyZExpc3RDb21wb25lbnQgfSxcbiAgICB7IHBhdGg6ICdjYXJkcy9uZXcnLCBjb21wb25lbnQ6IEZNQ2FyZEVkaXRDb21wb25lbnQgfSxcbiAgICB7IHBhdGg6ICdjYXJkcy86aWQnLCBjb21wb25lbnQ6IEZNQ2FyZEVkaXRDb21wb25lbnQgfVxuXTtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyldLFxuICAgIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBGTUNhcmRMaXN0Um91dGluZ01vZHVsZSB7IH1cblxuIl19