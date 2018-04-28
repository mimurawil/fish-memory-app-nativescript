"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
// Components
var fm_quiz_list_component_1 = require("./fm-quiz-list.component");
var fm_quiz_edit_component_1 = require("../fm-quiz-edit/fm-quiz-edit.component");
var routes = [
    { path: 'quizzes', component: fm_quiz_list_component_1.FMQuizListComponent },
    { path: 'quizzes/select-play', component: fm_quiz_list_component_1.FMQuizListComponent },
    { path: 'quizzes/new', component: fm_quiz_edit_component_1.FMQuizEditComponent },
    { path: 'quizzes/:id', component: fm_quiz_edit_component_1.FMQuizEditComponent },
];
var FMQuizListRoutingModule = /** @class */ (function () {
    function FMQuizListRoutingModule() {
    }
    FMQuizListRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule],
        })
    ], FMQuizListRoutingModule);
    return FMQuizListRoutingModule;
}());
exports.FMQuizListRoutingModule = FMQuizListRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm0tcXVpei1saXN0LnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmbS1xdWl6LWxpc3Qucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUN6QywwQ0FBdUQ7QUFFdkQsYUFBYTtBQUNiLG1FQUErRDtBQUMvRCxpRkFBNkU7QUFFN0UsSUFBTSxNQUFNLEdBQVc7SUFDbkIsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSw0Q0FBbUIsRUFBRTtJQUNuRCxFQUFFLElBQUksRUFBRSxxQkFBcUIsRUFBRSxTQUFTLEVBQUUsNENBQW1CLEVBQUU7SUFDL0QsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSw0Q0FBbUIsRUFBRTtJQUN2RCxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLDRDQUFtQixFQUFFO0NBQzFELENBQUM7QUFNRjtJQUFBO0lBQXVDLENBQUM7SUFBM0IsdUJBQXVCO1FBSm5DLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxDQUFDLHFCQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3hDLE9BQU8sRUFBRSxDQUFDLHFCQUFZLENBQUM7U0FDMUIsQ0FBQztPQUNXLHVCQUF1QixDQUFJO0lBQUQsOEJBQUM7Q0FBQSxBQUF4QyxJQUF3QztBQUEzQiwwREFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVzLCBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG4vLyBDb21wb25lbnRzXG5pbXBvcnQgeyBGTVF1aXpMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9mbS1xdWl6LWxpc3QuY29tcG9uZW50JztcbmltcG9ydCB7IEZNUXVpekVkaXRDb21wb25lbnQgfSBmcm9tICcuLi9mbS1xdWl6LWVkaXQvZm0tcXVpei1lZGl0LmNvbXBvbmVudCc7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICAgIHsgcGF0aDogJ3F1aXp6ZXMnLCBjb21wb25lbnQ6IEZNUXVpekxpc3RDb21wb25lbnQgfSxcbiAgICB7IHBhdGg6ICdxdWl6emVzL3NlbGVjdC1wbGF5JywgY29tcG9uZW50OiBGTVF1aXpMaXN0Q29tcG9uZW50IH0sXG4gICAgeyBwYXRoOiAncXVpenplcy9uZXcnLCBjb21wb25lbnQ6IEZNUXVpekVkaXRDb21wb25lbnQgfSxcbiAgICB7IHBhdGg6ICdxdWl6emVzLzppZCcsIGNvbXBvbmVudDogRk1RdWl6RWRpdENvbXBvbmVudCB9LFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbUm91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyldLFxuICAgIGV4cG9ydHM6IFtSb3V0ZXJNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBGTVF1aXpMaXN0Um91dGluZ01vZHVsZSB7IH1cbiJdfQ==