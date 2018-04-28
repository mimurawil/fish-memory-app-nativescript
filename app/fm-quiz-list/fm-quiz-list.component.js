"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var dialogs_1 = require("ui/dialogs");
// Telerik
var angular_1 = require("nativescript-ui-sidedrawer/angular");
var angular_2 = require("nativescript-ui-listview/angular");
// Statics & Domains
var static_data_1 = require("../shared/static-data");
// Services
var fm_quiz_service_1 = require("../service/fm-quiz.service");
var FMQuizListComponent = /** @class */ (function () {
    function FMQuizListComponent(quizService, routerExtensions) {
        this.quizService = quizService;
        this.routerExtensions = routerExtensions;
        this.CURRENT_SCREEN = static_data_1.CurrentScreenEnum.QuizList;
    }
    FMQuizListComponent.prototype.ngOnInit = function () {
        this.quizService.clearFilter();
        var paths = this.routerExtensions.router.url.substr(1).split('/');
        if (paths[paths.length - 1] === 'select-play') {
            this._isSelectingToPlay = true;
        }
        else {
            this._isSelectingToPlay = false;
        }
    };
    Object.defineProperty(FMQuizListComponent.prototype, "dataItems", {
        // Auxiliary
        get: function () {
            return this.quizService.getQuizzes();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FMQuizListComponent.prototype, "play", {
        get: function () {
            return this._isSelectingToPlay;
        },
        enumerable: true,
        configurable: true
    });
    // Event Listeners
    FMQuizListComponent.prototype.goBack = function () {
        this.routerExtensions.backToPreviousPage();
    };
    FMQuizListComponent.prototype.onAddQuizTapped = function () {
        this.routerExtensions.navigate(['/quizzes/new']);
    };
    FMQuizListComponent.prototype.onToggleDrawer = function () {
        this.drawerComponent.sideDrawer.toggleDrawerState();
    };
    FMQuizListComponent.prototype.onSwipeCellStarted = function (args) {
        var swipeLimits = args.data.swipeLimits;
        var swipeView = args['object'];
        var leftItem = swipeView.getViewById('left-view');
        var rightItem = swipeView.getViewById('right-view');
        swipeLimits.left = leftItem.getMeasuredWidth();
        swipeLimits.right = rightItem.getMeasuredWidth();
        swipeLimits.threshold = leftItem.getMeasuredWidth() / 2;
    };
    FMQuizListComponent.prototype.onItemSelected = function (args) {
        if (this._isSelectingToPlay) {
            var id = this.quizService.getQuizzes()[args.index].id;
            this.routerExtensions.navigate(['/play/quiz/', id]);
        }
    };
    FMQuizListComponent.prototype.onLeftSwipeClick = function (args) {
        var index = this.listViewComponent.listView.items.indexOf(args.object.bindingContext);
        var id = this.quizService.getQuizzes()[index].id;
        this.routerExtensions.navigate(['/quizzes/', id]);
    };
    FMQuizListComponent.prototype.onRightSwipeClick = function (args) {
        var _this = this;
        var options = {
            title: 'Delete Quiz',
            message: 'Are you sure you want to delete this quiz?\nThis operation cannot be undone.',
            okButtonText: 'Delete',
            cancelButtonText: 'Cancel'
        };
        dialogs_1.confirm(options).then(function (yes) {
            if (yes) {
                var index = _this.listViewComponent.listView.items.indexOf(args.object.bindingContext);
                var id = _this.quizService.getQuizzes()[index].id;
                _this.quizService.deleteQuiz(id).subscribe(function (success) { });
            }
        });
    };
    __decorate([
        core_1.ViewChild('myDrawer'),
        __metadata("design:type", angular_1.RadSideDrawerComponent)
    ], FMQuizListComponent.prototype, "drawerComponent", void 0);
    __decorate([
        core_1.ViewChild('myListView'),
        __metadata("design:type", angular_2.RadListViewComponent)
    ], FMQuizListComponent.prototype, "listViewComponent", void 0);
    FMQuizListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'fm-quiz-list',
            templateUrl: 'fm-quiz-list.component.html'
        }),
        __metadata("design:paramtypes", [fm_quiz_service_1.FMQuizService,
            router_1.RouterExtensions])
    ], FMQuizListComponent);
    return FMQuizListComponent;
}());
exports.FMQuizListComponent = FMQuizListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm0tcXVpei1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZtLXF1aXotbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBNkQ7QUFFN0Qsc0RBQStEO0FBQy9ELHNDQUFxRDtBQUVyRCxVQUFVO0FBQ1YsOERBQTRFO0FBQzVFLDREQUF3RTtBQUd4RSxvQkFBb0I7QUFDcEIscURBQTBEO0FBSTFELFdBQVc7QUFDWCw4REFBMkQ7QUFRM0Q7SUFTSSw2QkFDWSxXQUEwQixFQUMxQixnQkFBa0M7UUFEbEMsZ0JBQVcsR0FBWCxXQUFXLENBQWU7UUFDMUIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUp2QyxtQkFBYyxHQUFHLCtCQUFpQixDQUFDLFFBQVEsQ0FBQztJQUsvQyxDQUFDO0lBRUwsc0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFL0IsSUFBSSxLQUFLLEdBQWEsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM1RSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsS0FBSyxhQUFhLENBQUMsQ0FBQyxDQUFDO1lBQzVDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUM7UUFDbkMsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osSUFBSSxDQUFDLGtCQUFrQixHQUFHLEtBQUssQ0FBQztRQUNwQyxDQUFDO0lBQ0wsQ0FBQztJQUdELHNCQUFXLDBDQUFTO1FBRHBCLFlBQVk7YUFDWjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3pDLENBQUM7OztPQUFBO0lBRUQsc0JBQVcscUNBQUk7YUFB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Q0FBQyxVQUFBLE9BQU8sSUFBTSxDQUFDLENBQUMsQ0FBQztZQUM5RCxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBbEZzQjtRQUF0QixnQkFBUyxDQUFDLFVBQVUsQ0FBQztrQ0FBa0IsZ0NBQXNCO2dFQUFDO0lBQ3RDO1FBQXhCLGdCQUFTLENBQUMsWUFBWSxDQUFDO2tDQUFvQiw4QkFBb0I7a0VBQUM7SUFIeEQsbUJBQW1CO1FBTi9CLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGNBQWM7WUFDeEIsV0FBVyxFQUFFLDZCQUE2QjtTQUM3QyxDQUFDO3lDQVkyQiwrQkFBYTtZQUNSLHlCQUFnQjtPQVhyQyxtQkFBbUIsQ0FxRi9CO0lBQUQsMEJBQUM7Q0FBQSxBQXJGRCxJQXFGQztBQXJGWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBWaWV3IH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9jb3JlL3ZpZXcnO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBDb25maXJtT3B0aW9ucywgY29uZmlybSB9IGZyb20gJ3VpL2RpYWxvZ3MnO1xuXG4vLyBUZWxlcmlrXG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyQ29tcG9uZW50IH0gZnJvbSAnbmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXIvYW5ndWxhcic7XG5pbXBvcnQgeyBSYWRMaXN0Vmlld0NvbXBvbmVudCB9IGZyb20gJ25hdGl2ZXNjcmlwdC11aS1saXN0dmlldy9hbmd1bGFyJztcbmltcG9ydCB7IExpc3RWaWV3RXZlbnREYXRhIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3JztcblxuLy8gU3RhdGljcyAmIERvbWFpbnNcbmltcG9ydCB7IEN1cnJlbnRTY3JlZW5FbnVtIH0gZnJvbSAnLi4vc2hhcmVkL3N0YXRpYy1kYXRhJztcbmltcG9ydCB7IEZpc2hNZW1vcnlEb21haW4gfSBmcm9tICcuLi90eXBpbmcvZG9tYWlucyc7XG5pbXBvcnQgRk1RdWl6TGlzdEl0ZW0gPSBGaXNoTWVtb3J5RG9tYWluLkZNUXVpekxpc3RJdGVtO1xuXG4vLyBTZXJ2aWNlc1xuaW1wb3J0IHsgRk1RdWl6U2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2UvZm0tcXVpei5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ2ZtLXF1aXotbGlzdCcsXG4gICAgdGVtcGxhdGVVcmw6ICdmbS1xdWl6LWxpc3QuY29tcG9uZW50Lmh0bWwnXG59KVxuXG5leHBvcnQgY2xhc3MgRk1RdWl6TGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBAVmlld0NoaWxkKCdteURyYXdlcicpIGRyYXdlckNvbXBvbmVudDogUmFkU2lkZURyYXdlckNvbXBvbmVudDtcbiAgICBAVmlld0NoaWxkKCdteUxpc3RWaWV3JykgbGlzdFZpZXdDb21wb25lbnQ6IFJhZExpc3RWaWV3Q29tcG9uZW50O1xuXG4gICAgcHJpdmF0ZSBfaXNTZWxlY3RpbmdUb1BsYXk6IGJvb2xlYW47XG5cbiAgICBwdWJsaWMgQ1VSUkVOVF9TQ1JFRU4gPSBDdXJyZW50U2NyZWVuRW51bS5RdWl6TGlzdDtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHF1aXpTZXJ2aWNlOiBGTVF1aXpTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXG4gICAgKSB7IH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnF1aXpTZXJ2aWNlLmNsZWFyRmlsdGVyKCk7XG5cbiAgICAgICAgbGV0IHBhdGhzOiBzdHJpbmdbXSA9IHRoaXMucm91dGVyRXh0ZW5zaW9ucy5yb3V0ZXIudXJsLnN1YnN0cigxKS5zcGxpdCgnLycpO1xuICAgICAgICBpZiAocGF0aHNbcGF0aHMubGVuZ3RoIC0gMV0gPT09ICdzZWxlY3QtcGxheScpIHtcbiAgICAgICAgICAgIHRoaXMuX2lzU2VsZWN0aW5nVG9QbGF5ID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2lzU2VsZWN0aW5nVG9QbGF5ID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBdXhpbGlhcnlcbiAgICBwdWJsaWMgZ2V0IGRhdGFJdGVtcygpOiBGTVF1aXpMaXN0SXRlbVtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucXVpelNlcnZpY2UuZ2V0UXVpenplcygpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgcGxheSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzU2VsZWN0aW5nVG9QbGF5O1xuICAgIH1cblxuICAgIC8vIEV2ZW50IExpc3RlbmVyc1xuICAgIHB1YmxpYyBnb0JhY2soKSB7XG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5iYWNrVG9QcmV2aW91c1BhZ2UoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25BZGRRdWl6VGFwcGVkKCkge1xuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoWycvcXVpenplcy9uZXcnXSk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uVG9nZ2xlRHJhd2VyKCkge1xuICAgICAgICB0aGlzLmRyYXdlckNvbXBvbmVudC5zaWRlRHJhd2VyLnRvZ2dsZURyYXdlclN0YXRlKCk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uU3dpcGVDZWxsU3RhcnRlZChhcmdzOiBMaXN0Vmlld0V2ZW50RGF0YSkge1xuICAgICAgICB2YXIgc3dpcGVMaW1pdHMgPSBhcmdzLmRhdGEuc3dpcGVMaW1pdHM7XG4gICAgICAgIHZhciBzd2lwZVZpZXcgPSBhcmdzWydvYmplY3QnXTtcbiAgICAgICAgdmFyIGxlZnRJdGVtID0gc3dpcGVWaWV3LmdldFZpZXdCeUlkPFZpZXc+KCdsZWZ0LXZpZXcnKTtcbiAgICAgICAgdmFyIHJpZ2h0SXRlbSA9IHN3aXBlVmlldy5nZXRWaWV3QnlJZDxWaWV3PigncmlnaHQtdmlldycpO1xuICAgICAgICBzd2lwZUxpbWl0cy5sZWZ0ID0gbGVmdEl0ZW0uZ2V0TWVhc3VyZWRXaWR0aCgpO1xuICAgICAgICBzd2lwZUxpbWl0cy5yaWdodCA9IHJpZ2h0SXRlbS5nZXRNZWFzdXJlZFdpZHRoKCk7XG4gICAgICAgIHN3aXBlTGltaXRzLnRocmVzaG9sZCA9IGxlZnRJdGVtLmdldE1lYXN1cmVkV2lkdGgoKSAvIDI7XG4gICAgfVxuXG4gICAgcHVibGljIG9uSXRlbVNlbGVjdGVkKGFyZ3M6IExpc3RWaWV3RXZlbnREYXRhKSB7XG4gICAgICAgIGlmICh0aGlzLl9pc1NlbGVjdGluZ1RvUGxheSkge1xuICAgICAgICAgICAgY29uc3QgaWQgPSB0aGlzLnF1aXpTZXJ2aWNlLmdldFF1aXp6ZXMoKVthcmdzLmluZGV4XS5pZDtcbiAgICAgICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbJy9wbGF5L3F1aXovJywgaWRdKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBvbkxlZnRTd2lwZUNsaWNrKGFyZ3M6IExpc3RWaWV3RXZlbnREYXRhKSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5saXN0Vmlld0NvbXBvbmVudC5saXN0Vmlldy5pdGVtcy5pbmRleE9mKGFyZ3Mub2JqZWN0LmJpbmRpbmdDb250ZXh0KTtcbiAgICAgICAgY29uc3QgaWQgPSB0aGlzLnF1aXpTZXJ2aWNlLmdldFF1aXp6ZXMoKVtpbmRleF0uaWQ7XG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbJy9xdWl6emVzLycsIGlkXSk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uUmlnaHRTd2lwZUNsaWNrKGFyZ3M6IExpc3RWaWV3RXZlbnREYXRhKSB7XG4gICAgICAgIGxldCBvcHRpb25zOiBDb25maXJtT3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHRpdGxlOiAnRGVsZXRlIFF1aXonLFxuICAgICAgICAgICAgbWVzc2FnZTogJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBxdWl6P1xcblRoaXMgb3BlcmF0aW9uIGNhbm5vdCBiZSB1bmRvbmUuJyxcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogJ0RlbGV0ZScsXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiAnQ2FuY2VsJ1xuICAgICAgICB9O1xuICAgICAgICBjb25maXJtKG9wdGlvbnMpLnRoZW4oeWVzID0+IHtcbiAgICAgICAgICAgIGlmICh5ZXMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMubGlzdFZpZXdDb21wb25lbnQubGlzdFZpZXcuaXRlbXMuaW5kZXhPZihhcmdzLm9iamVjdC5iaW5kaW5nQ29udGV4dCk7XG4gICAgICAgICAgICAgICAgY29uc3QgaWQgPSB0aGlzLnF1aXpTZXJ2aWNlLmdldFF1aXp6ZXMoKVtpbmRleF0uaWQ7XG4gICAgICAgICAgICAgICAgdGhpcy5xdWl6U2VydmljZS5kZWxldGVRdWl6KGlkKS5zdWJzY3JpYmUoc3VjY2VzcyA9PiB7IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59Il19