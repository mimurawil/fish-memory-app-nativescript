"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var router_2 = require("@angular/router");
// Telerik Components
var angular_1 = require("nativescript-ui-listview/angular");
// Modal Dialog
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var cards_pick_modal_component_1 = require("../shared/cards-pick-modal.component");
// Services
var fm_quiz_service_1 = require("../service/fm-quiz.service");
var FMQuizEditComponent = /** @class */ (function () {
    function FMQuizEditComponent(routerExtensions, activatedRoute, quizService, vcRef, modalService) {
        var _this = this;
        this.routerExtensions = routerExtensions;
        this.activatedRoute = activatedRoute;
        this.quizService = quizService;
        this.vcRef = vcRef;
        this.modalService = modalService;
        this.isNewQuiz = true;
        this.myQuiz = { title: '', cards: [] };
        // title: 'aaa',
        // cards: [
        //     { frontText: 'a1', backText: 'b1' },
        //     { frontText: 'a2', backText: 'b2' },
        //     { frontText: 'a3', backText: 'b3' },
        // ]
        // };
        activatedRoute.params.forEach(function (params) {
            _this._id = +params['id'];
            if (_this._id) {
                _this.isNewQuiz = false;
                _this.myQuiz = _this.quizService.getQuiz(_this._id);
            }
        });
        this.showFront = new Array(this.myQuiz.cards.length).fill(true);
        this.isSaving = false;
    }
    FMQuizEditComponent.prototype.ngOnInit = function () { };
    Object.defineProperty(FMQuizEditComponent.prototype, "isSafeToSave", {
        // Auxiliary
        get: function () {
            if (this.myQuiz.title.trim() === '')
                return false;
            if (this.myQuiz.cards.length < 1)
                return false;
            return true;
        },
        enumerable: true,
        configurable: true
    });
    // Event Listeners
    FMQuizEditComponent.prototype.goBack = function () {
        this.routerExtensions.backToPreviousPage();
    };
    FMQuizEditComponent.prototype.onSwipeCellStarted = function (args) {
        var swipeLimits = args.data.swipeLimits;
        var swipeView = args['object'];
        // var leftItem = swipeView.getViewById<View>('left-view');
        var rightItem = swipeView.getViewById('right-view');
        // swipeLimits.left = leftItem.getMeasuredWidth();
        swipeLimits.right = rightItem.getMeasuredWidth();
        // swipeLimits.threshold = leftItem.getMeasuredWidth() / 2;
        swipeLimits.threshold = rightItem.getMeasuredWidth() / 2;
    };
    FMQuizEditComponent.prototype.onRightSwipeClick = function (args) {
        var index = this.listViewComponent.listView.items.indexOf(args.object.bindingContext);
        this.myQuiz.cards.splice(index, 1);
    };
    FMQuizEditComponent.prototype.onItemSelected = function (args) {
        this.showFront[args.index] = !this.showFront[args.index];
    };
    FMQuizEditComponent.prototype.onAddCardTapped = function () {
        var _this = this;
        var options = {
            context: { alreadySelected: this.myQuiz.cards },
            fullscreen: true,
            viewContainerRef: this.vcRef
        };
        this.modalService.showModal(cards_pick_modal_component_1.FMCardsPickModalComponent, options)
            .then(function (selects) {
            if (selects) {
                selects.forEach(function (item) {
                    _this.myQuiz.cards.push(item);
                    _this.showFront.push(true);
                });
            }
        });
    };
    FMQuizEditComponent.prototype.onSaveTapped = function () {
        var _this = this;
        this.isSaving = true;
        if (this.isNewQuiz) {
            this.quizService.addQuiz(this.myQuiz)
                .subscribe(function (success) {
                _this.isSaving = false;
                _this.routerExtensions.backToPreviousPage();
            });
        }
        else {
            this.quizService.updateQuiz(this.myQuiz)
                .subscribe(function (success) {
                _this.isSaving = false;
                _this.routerExtensions.backToPreviousPage();
            });
        }
    };
    __decorate([
        core_1.ViewChild('myListView'),
        __metadata("design:type", angular_1.RadListViewComponent)
    ], FMQuizEditComponent.prototype, "listViewComponent", void 0);
    FMQuizEditComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'fm-quiz-edit',
            templateUrl: 'fm-quiz-edit.component.html',
            styleUrls: ['fm-quiz-edit.component.css']
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions,
            router_2.ActivatedRoute,
            fm_quiz_service_1.FMQuizService,
            core_1.ViewContainerRef,
            modal_dialog_1.ModalDialogService])
    ], FMQuizEditComponent);
    return FMQuizEditComponent;
}());
exports.FMQuizEditComponent = FMQuizEditComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm0tcXVpei1lZGl0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZtLXF1aXotZWRpdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBK0U7QUFFL0Usc0RBQStEO0FBQy9ELDBDQUFpRDtBQUVqRCxxQkFBcUI7QUFDckIsNERBQXdFO0FBR3hFLGVBQWU7QUFDZixrRUFBMkY7QUFDM0YsbUZBQWlGO0FBRWpGLFdBQVc7QUFDWCw4REFBMkQ7QUFlM0Q7SUFXSSw2QkFDWSxnQkFBa0MsRUFDbEMsY0FBOEIsRUFDOUIsV0FBMEIsRUFDMUIsS0FBdUIsRUFDdkIsWUFBZ0M7UUFMNUMsaUJBeUJDO1FBeEJXLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLGdCQUFXLEdBQVgsV0FBVyxDQUFlO1FBQzFCLFVBQUssR0FBTCxLQUFLLENBQWtCO1FBQ3ZCLGlCQUFZLEdBQVosWUFBWSxDQUFvQjtRQUV4QyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLENBQUM7UUFDdkMsZ0JBQWdCO1FBQ2hCLFdBQVc7UUFDWCwyQ0FBMkM7UUFDM0MsMkNBQTJDO1FBQzNDLDJDQUEyQztRQUMzQyxJQUFJO1FBQ0osS0FBSztRQUNMLGNBQWMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQUEsTUFBTTtZQUNoQyxLQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3pCLEVBQUUsQ0FBQyxDQUFDLEtBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUNYLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO2dCQUN2QixLQUFJLENBQUMsTUFBTSxHQUFHLEtBQUksQ0FBQyxX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LCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBWaWV3IH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9jb3JlL3ZpZXcnO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbi8vIFRlbGVyaWsgQ29tcG9uZW50c1xuaW1wb3J0IHsgUmFkTGlzdFZpZXdDb21wb25lbnQgfSBmcm9tICduYXRpdmVzY3JpcHQtdWktbGlzdHZpZXcvYW5ndWxhcic7XG5pbXBvcnQgeyBMaXN0Vmlld0V2ZW50RGF0YSB9IGZyb20gJ25hdGl2ZXNjcmlwdC11aS1saXN0dmlldyc7XG5cbi8vIE1vZGFsIERpYWxvZ1xuaW1wb3J0IHsgTW9kYWxEaWFsb2dTZXJ2aWNlLCBNb2RhbERpYWxvZ09wdGlvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9tb2RhbC1kaWFsb2cnO1xuaW1wb3J0IHsgRk1DYXJkc1BpY2tNb2RhbENvbXBvbmVudCB9IGZyb20gJy4uL3NoYXJlZC9jYXJkcy1waWNrLW1vZGFsLmNvbXBvbmVudCc7XG5cbi8vIFNlcnZpY2VzXG5pbXBvcnQgeyBGTVF1aXpTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZS9mbS1xdWl6LnNlcnZpY2UnO1xuXG4vLyBTdGF0aWNzICYgRG9tYWluc1xuaW1wb3J0IHsgRmlzaE1lbW9yeURvbWFpbiB9IGZyb20gJy4uL3R5cGluZy9kb21haW5zJztcbmltcG9ydCBGTVF1aXogPSBGaXNoTWVtb3J5RG9tYWluLkZNUXVpejtcbmltcG9ydCBGTUNhcmQgPSBGaXNoTWVtb3J5RG9tYWluLkZNQ2FyZDtcblxuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnZm0tcXVpei1lZGl0JyxcbiAgICB0ZW1wbGF0ZVVybDogJ2ZtLXF1aXotZWRpdC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJ2ZtLXF1aXotZWRpdC5jb21wb25lbnQuY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBGTVF1aXpFZGl0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIEBWaWV3Q2hpbGQoJ215TGlzdFZpZXcnKSBsaXN0Vmlld0NvbXBvbmVudDogUmFkTGlzdFZpZXdDb21wb25lbnQ7XG5cbiAgICBwcml2YXRlIF9pZDogbnVtYmVyO1xuXG4gICAgcHVibGljIGlzTmV3UXVpejogYm9vbGVhbjtcbiAgICBwdWJsaWMgbXlRdWl6OiBGTVF1aXo7XG4gICAgcHVibGljIHNob3dGcm9udDogYm9vbGVhbltdO1xuICAgIHB1YmxpYyBpc1NhdmluZzogYm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXG4gICAgICAgIHByaXZhdGUgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgICAgICBwcml2YXRlIHF1aXpTZXJ2aWNlOiBGTVF1aXpTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHZjUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgICAgICBwcml2YXRlIG1vZGFsU2VydmljZTogTW9kYWxEaWFsb2dTZXJ2aWNlXG4gICAgKSB7XG4gICAgICAgIHRoaXMuaXNOZXdRdWl6ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5teVF1aXogPSB7IHRpdGxlOiAnJywgY2FyZHM6IFtdIH07XG4gICAgICAgIC8vIHRpdGxlOiAnYWFhJyxcbiAgICAgICAgLy8gY2FyZHM6IFtcbiAgICAgICAgLy8gICAgIHsgZnJvbnRUZXh0OiAnYTEnLCBiYWNrVGV4dDogJ2IxJyB9LFxuICAgICAgICAvLyAgICAgeyBmcm9udFRleHQ6ICdhMicsIGJhY2tUZXh0OiAnYjInIH0sXG4gICAgICAgIC8vICAgICB7IGZyb250VGV4dDogJ2EzJywgYmFja1RleHQ6ICdiMycgfSxcbiAgICAgICAgLy8gXVxuICAgICAgICAvLyB9O1xuICAgICAgICBhY3RpdmF0ZWRSb3V0ZS5wYXJhbXMuZm9yRWFjaChwYXJhbXMgPT4ge1xuICAgICAgICAgICAgdGhpcy5faWQgPSArcGFyYW1zWydpZCddO1xuICAgICAgICAgICAgaWYgKHRoaXMuX2lkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc05ld1F1aXogPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLm15UXVpeiA9IHRoaXMucXVpelNlcnZpY2UuZ2V0UXVpeih0aGlzLl9pZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnNob3dGcm9udCA9IG5ldyBBcnJheSh0aGlzLm15UXVpei5jYXJkcy5sZW5ndGgpLmZpbGwodHJ1ZSk7XG4gICAgICAgIHRoaXMuaXNTYXZpbmcgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHsgfVxuXG4gICAgLy8gQXV4aWxpYXJ5XG4gICAgcHVibGljIGdldCBpc1NhZmVUb1NhdmUoKTogYm9vbGVhbiB7XG4gICAgICAgIGlmICh0aGlzLm15UXVpei50aXRsZS50cmltKCkgPT09ICcnKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgaWYgKHRoaXMubXlRdWl6LmNhcmRzLmxlbmd0aCA8IDEpIHJldHVybiBmYWxzZTtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBFdmVudCBMaXN0ZW5lcnNcbiAgICBwdWJsaWMgZ29CYWNrKCkge1xuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMuYmFja1RvUHJldmlvdXNQYWdlKCk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uU3dpcGVDZWxsU3RhcnRlZChhcmdzOiBMaXN0Vmlld0V2ZW50RGF0YSkge1xuICAgICAgICB2YXIgc3dpcGVMaW1pdHMgPSBhcmdzLmRhdGEuc3dpcGVMaW1pdHM7XG4gICAgICAgIHZhciBzd2lwZVZpZXcgPSBhcmdzWydvYmplY3QnXTtcbiAgICAgICAgLy8gdmFyIGxlZnRJdGVtID0gc3dpcGVWaWV3LmdldFZpZXdCeUlkPFZpZXc+KCdsZWZ0LXZpZXcnKTtcbiAgICAgICAgdmFyIHJpZ2h0SXRlbSA9IHN3aXBlVmlldy5nZXRWaWV3QnlJZDxWaWV3PigncmlnaHQtdmlldycpO1xuICAgICAgICAvLyBzd2lwZUxpbWl0cy5sZWZ0ID0gbGVmdEl0ZW0uZ2V0TWVhc3VyZWRXaWR0aCgpO1xuICAgICAgICBzd2lwZUxpbWl0cy5yaWdodCA9IHJpZ2h0SXRlbS5nZXRNZWFzdXJlZFdpZHRoKCk7XG4gICAgICAgIC8vIHN3aXBlTGltaXRzLnRocmVzaG9sZCA9IGxlZnRJdGVtLmdldE1lYXN1cmVkV2lkdGgoKSAvIDI7XG4gICAgICAgIHN3aXBlTGltaXRzLnRocmVzaG9sZCA9IHJpZ2h0SXRlbS5nZXRNZWFzdXJlZFdpZHRoKCkgLyAyO1xuICAgIH1cblxuICAgIHB1YmxpYyBvblJpZ2h0U3dpcGVDbGljayhhcmdzOiBMaXN0Vmlld0V2ZW50RGF0YSkge1xuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMubGlzdFZpZXdDb21wb25lbnQubGlzdFZpZXcuaXRlbXMuaW5kZXhPZihhcmdzLm9iamVjdC5iaW5kaW5nQ29udGV4dCk7XG4gICAgICAgIHRoaXMubXlRdWl6LmNhcmRzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uSXRlbVNlbGVjdGVkKGFyZ3M6IExpc3RWaWV3RXZlbnREYXRhKSB7XG4gICAgICAgIHRoaXMuc2hvd0Zyb250W2FyZ3MuaW5kZXhdID0gIXRoaXMuc2hvd0Zyb250W2FyZ3MuaW5kZXhdO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkFkZENhcmRUYXBwZWQoKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnM6IE1vZGFsRGlhbG9nT3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGNvbnRleHQ6IHsgYWxyZWFkeVNlbGVjdGVkOiB0aGlzLm15UXVpei5jYXJkcyB9LFxuICAgICAgICAgICAgZnVsbHNjcmVlbjogdHJ1ZSxcbiAgICAgICAgICAgIHZpZXdDb250YWluZXJSZWY6IHRoaXMudmNSZWZcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLm1vZGFsU2VydmljZS5zaG93TW9kYWwoRk1DYXJkc1BpY2tNb2RhbENvbXBvbmVudCwgb3B0aW9ucylcbiAgICAgICAgICAgIC50aGVuKFxuICAgICAgICAgICAgICAgIHNlbGVjdHMgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZWN0cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0cy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubXlRdWl6LmNhcmRzLnB1c2goaXRlbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93RnJvbnQucHVzaCh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25TYXZlVGFwcGVkKCkge1xuICAgICAgICB0aGlzLmlzU2F2aW5nID0gdHJ1ZTtcbiAgICAgICAgaWYgKHRoaXMuaXNOZXdRdWl6KSB7XG4gICAgICAgICAgICB0aGlzLnF1aXpTZXJ2aWNlLmFkZFF1aXoodGhpcy5teVF1aXopXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZShzdWNjZXNzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1NhdmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMuYmFja1RvUHJldmlvdXNQYWdlKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnF1aXpTZXJ2aWNlLnVwZGF0ZVF1aXoodGhpcy5teVF1aXopXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZShzdWNjZXNzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1NhdmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMuYmFja1RvUHJldmlvdXNQYWdlKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59Il19