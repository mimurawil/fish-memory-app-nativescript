"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var dialogs_1 = require("ui/dialogs");
// Telerik Components
var angular_1 = require("nativescript-ui-sidedrawer/angular");
var angular_2 = require("nativescript-ui-listview/angular");
// Services
var fm_card_service_1 = require("../service/fm-card.service");
// Statics & Domains
var static_data_1 = require("../shared/static-data");
var FMCardListComponent = /** @class */ (function () {
    function FMCardListComponent(cardService, routerExtensions) {
        this.cardService = cardService;
        this.routerExtensions = routerExtensions;
        this.CURRENT_SCREEN = static_data_1.CurrentScreenEnum.CardsList;
        this.allItemsFront = true;
    }
    FMCardListComponent.prototype.ngOnInit = function () {
        this.cardService.clearFilter();
        this.showFront = new Array(this.cardService.getCards().length).fill(true);
    };
    Object.defineProperty(FMCardListComponent.prototype, "dataItems", {
        // Auxiliary
        get: function () {
            return this.cardService.getCards();
        },
        enumerable: true,
        configurable: true
    });
    // Event Listeners
    FMCardListComponent.prototype.onAddCardTapped = function () {
        this.routerExtensions.navigate(['/cards/new']);
    };
    FMCardListComponent.prototype.onToggleDrawer = function () {
        this.drawerComponent.sideDrawer.toggleDrawerState();
    };
    FMCardListComponent.prototype.onSwipeCellStarted = function (args) {
        var swipeLimits = args.data.swipeLimits;
        var swipeView = args['object'];
        var leftItem = swipeView.getViewById('left-view');
        var rightItem = swipeView.getViewById('right-view');
        swipeLimits.left = leftItem.getMeasuredWidth();
        swipeLimits.right = rightItem.getMeasuredWidth();
        swipeLimits.threshold = leftItem.getMeasuredWidth() / 2;
    };
    FMCardListComponent.prototype.onLeftSwipeClick = function (args) {
        var index = this.listViewComponent.listView.items.indexOf(args.object.bindingContext);
        var id = this.cardService.getCards()[index].id;
        this.routerExtensions.navigate(['/cards/', id]);
    };
    FMCardListComponent.prototype.onRightSwipeClick = function (args) {
        var _this = this;
        var options = {
            title: 'Delete Card',
            message: 'Are you sure you want to delete this card?\nThis operation cannot be undone.',
            okButtonText: 'Delete',
            cancelButtonText: 'Cancel'
        };
        dialogs_1.confirm(options).then(function (yes) {
            if (yes) {
                var index = _this.listViewComponent.listView.items.indexOf(args.object.bindingContext);
                var id = _this.cardService.getCards()[index].id;
                _this.cardService.deleteCard(id).subscribe(function (success) { });
            }
        });
    };
    FMCardListComponent.prototype.onItemSelected = function (args) {
        this.showFront[args.index] = !this.showFront[args.index];
    };
    FMCardListComponent.prototype.onItemDeselected = function (args) {
        this.showFront[args.index] = !this.showFront[args.index];
    };
    FMCardListComponent.prototype.onSetAllItemsFront = function () {
        this.showFront = new Array(this.cardService.getCards().length).fill(true);
        this.allItemsFront = true;
    };
    FMCardListComponent.prototype.onSetAllItemsBack = function () {
        this.showFront = new Array(this.cardService.getCards().length).fill(false);
        this.allItemsFront = false;
    };
    __decorate([
        core_1.ViewChild(angular_1.RadSideDrawerComponent),
        __metadata("design:type", angular_1.RadSideDrawerComponent)
    ], FMCardListComponent.prototype, "drawerComponent", void 0);
    __decorate([
        core_1.ViewChild('myListView'),
        __metadata("design:type", angular_2.RadListViewComponent)
    ], FMCardListComponent.prototype, "listViewComponent", void 0);
    FMCardListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'fm-card-list',
            templateUrl: 'fm-card-list.component.html',
            styleUrls: ['fm-card-list.component.css']
        }),
        __metadata("design:paramtypes", [fm_card_service_1.FMCardService,
            router_1.RouterExtensions])
    ], FMCardListComponent);
    return FMCardListComponent;
}());
exports.FMCardListComponent = FMCardListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm0tY2FyZC1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZtLWNhcmQtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBNkQ7QUFFN0Qsc0RBQStEO0FBQy9ELHNDQUFvRDtBQUVwRCxxQkFBcUI7QUFDckIsOERBQTRFO0FBQzVFLDREQUF3RTtBQUd4RSxXQUFXO0FBQ1gsOERBQTJEO0FBRTNELG9CQUFvQjtBQUNwQixxREFBMEQ7QUFTMUQ7SUFRSSw2QkFDWSxXQUEwQixFQUMxQixnQkFBa0M7UUFEbEMsZ0JBQVcsR0FBWCxXQUFXLENBQWU7UUFDMUIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUp2QyxtQkFBYyxHQUFzQiwrQkFBaUIsQ0FBQyxTQUFTLENBQUM7UUFNbkUsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7SUFDOUIsQ0FBQztJQUVELHNDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQy9CLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUUsQ0FBQztJQUdELHNCQUFXLDBDQUFTO1FBRHBCLFlBQVk7YUFDWjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3ZDLENBQUM7OztPQUFBO0lBRUQsa0JBQWtCO0lBQ1gsNkNBQWUsR0FBdEI7UUFDSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRU0sNENBQWMsR0FBckI7UUFDSSxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQ3hELENB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QVMsR0FBRyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzRSxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUMvQixDQUFDO0lBaEZrQztRQUFsQyxnQkFBUyxDQUFDLGdDQUFzQixDQUFDO2tDQUFrQixnQ0FBc0I7Z0VBQUM7SUFDbEQ7UUFBeEIsZ0JBQVMsQ0FBQyxZQUFZLENBQUM7a0NBQW9CLDhCQUFvQjtrRUFBQztJQUh4RCxtQkFBbUI7UUFQL0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsY0FBYztZQUN4QixXQUFXLEVBQUUsNkJBQTZCO1lBQzFDLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixDQUFDO1NBQzVDLENBQUM7eUNBVzJCLCtCQUFhO1lBQ1IseUJBQWdCO09BVnJDLG1CQUFtQixDQW9GL0I7SUFBRCwwQkFBQztDQUFBLEFBcEZELElBb0ZDO0FBcEZZLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFZpZXcgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2NvcmUvdmlldyc7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IENvbmZpcm1PcHRpb25zLCBjb25maXJtIH0gZnJvbSAndWkvZGlhbG9ncydcblxuLy8gVGVsZXJpayBDb21wb25lbnRzXG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyQ29tcG9uZW50IH0gZnJvbSAnbmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXIvYW5ndWxhcic7XG5pbXBvcnQgeyBSYWRMaXN0Vmlld0NvbXBvbmVudCB9IGZyb20gJ25hdGl2ZXNjcmlwdC11aS1saXN0dmlldy9hbmd1bGFyJztcbmltcG9ydCB7IExpc3RWaWV3RXZlbnREYXRhIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3JztcblxuLy8gU2VydmljZXNcbmltcG9ydCB7IEZNQ2FyZFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlL2ZtLWNhcmQuc2VydmljZSc7XG5cbi8vIFN0YXRpY3MgJiBEb21haW5zXG5pbXBvcnQgeyBDdXJyZW50U2NyZWVuRW51bSB9IGZyb20gJy4uL3NoYXJlZC9zdGF0aWMtZGF0YSc7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdmbS1jYXJkLWxpc3QnLFxuICAgIHRlbXBsYXRlVXJsOiAnZm0tY2FyZC1saXN0LmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnZm0tY2FyZC1saXN0LmNvbXBvbmVudC5jc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIEZNQ2FyZExpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgQFZpZXdDaGlsZChSYWRTaWRlRHJhd2VyQ29tcG9uZW50KSBkcmF3ZXJDb21wb25lbnQ6IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQ7XG4gICAgQFZpZXdDaGlsZCgnbXlMaXN0VmlldycpIGxpc3RWaWV3Q29tcG9uZW50OiBSYWRMaXN0Vmlld0NvbXBvbmVudDtcbiAgICBwdWJsaWMgc2hvd0Zyb250OiBib29sZWFuW107XG4gICAgcHVibGljIGFsbEl0ZW1zRnJvbnQ6IGJvb2xlYW47XG4gICAgcHVibGljIENVUlJFTlRfU0NSRUVOOiBDdXJyZW50U2NyZWVuRW51bSA9IEN1cnJlbnRTY3JlZW5FbnVtLkNhcmRzTGlzdDtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGNhcmRTZXJ2aWNlOiBGTUNhcmRTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnNcbiAgICApIHtcbiAgICAgICAgdGhpcy5hbGxJdGVtc0Zyb250ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5jYXJkU2VydmljZS5jbGVhckZpbHRlcigpO1xuICAgICAgICB0aGlzLnNob3dGcm9udCA9IG5ldyBBcnJheSh0aGlzLmNhcmRTZXJ2aWNlLmdldENhcmRzKCkubGVuZ3RoKS5maWxsKHRydWUpO1xuICAgIH1cblxuICAgIC8vIEF1eGlsaWFyeVxuICAgIHB1YmxpYyBnZXQgZGF0YUl0ZW1zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jYXJkU2VydmljZS5nZXRDYXJkcygpO1xuICAgIH1cblxuICAgIC8vIEV2ZW50IExpc3RlbmVyc1xuICAgIHB1YmxpYyBvbkFkZENhcmRUYXBwZWQoKSB7XG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbJy9jYXJkcy9uZXcnXSk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uVG9nZ2xlRHJhd2VyKCkge1xuICAgICAgICB0aGlzLmRyYXdlckNvbXBvbmVudC5zaWRlRHJhd2VyLnRvZ2dsZURyYXdlclN0YXRlKCk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uU3dpcGVDZWxsU3RhcnRlZChhcmdzOiBMaXN0Vmlld0V2ZW50RGF0YSkge1xuICAgICAgICB2YXIgc3dpcGVMaW1pdHMgPSBhcmdzLmRhdGEuc3dpcGVMaW1pdHM7XG4gICAgICAgIHZhciBzd2lwZVZpZXcgPSBhcmdzWydvYmplY3QnXTtcbiAgICAgICAgdmFyIGxlZnRJdGVtID0gc3dpcGVWaWV3LmdldFZpZXdCeUlkPFZpZXc+KCdsZWZ0LXZpZXcnKTtcbiAgICAgICAgdmFyIHJpZ2h0SXRlbSA9IHN3aXBlVmlldy5nZXRWaWV3QnlJZDxWaWV3PigncmlnaHQtdmlldycpO1xuICAgICAgICBzd2lwZUxpbWl0cy5sZWZ0ID0gbGVmdEl0ZW0uZ2V0TWVhc3VyZWRXaWR0aCgpO1xuICAgICAgICBzd2lwZUxpbWl0cy5yaWdodCA9IHJpZ2h0SXRlbS5nZXRNZWFzdXJlZFdpZHRoKCk7XG4gICAgICAgIHN3aXBlTGltaXRzLnRocmVzaG9sZCA9IGxlZnRJdGVtLmdldE1lYXN1cmVkV2lkdGgoKSAvIDI7XG4gICAgfVxuXG4gICAgcHVibGljIG9uTGVmdFN3aXBlQ2xpY2soYXJnczogTGlzdFZpZXdFdmVudERhdGEpIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmxpc3RWaWV3Q29tcG9uZW50Lmxpc3RWaWV3Lml0ZW1zLmluZGV4T2YoYXJncy5vYmplY3QuYmluZGluZ0NvbnRleHQpO1xuICAgICAgICBjb25zdCBpZCA9IHRoaXMuY2FyZFNlcnZpY2UuZ2V0Q2FyZHMoKVtpbmRleF0uaWQ7XG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbJy9jYXJkcy8nLCBpZF0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBvblJpZ2h0U3dpcGVDbGljayhhcmdzOiBMaXN0Vmlld0V2ZW50RGF0YSkge1xuICAgICAgICBsZXQgb3B0aW9uczogQ29uZmlybU9wdGlvbnMgPSB7XG4gICAgICAgICAgICB0aXRsZTogJ0RlbGV0ZSBDYXJkJyxcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgY2FyZD9cXG5UaGlzIG9wZXJhdGlvbiBjYW5ub3QgYmUgdW5kb25lLicsXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6ICdEZWxldGUnLFxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogJ0NhbmNlbCdcbiAgICAgICAgfTtcbiAgICAgICAgY29uZmlybShvcHRpb25zKS50aGVuKHllcyA9PiB7XG4gICAgICAgICAgICBpZiAoeWVzKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmxpc3RWaWV3Q29tcG9uZW50Lmxpc3RWaWV3Lml0ZW1zLmluZGV4T2YoYXJncy5vYmplY3QuYmluZGluZ0NvbnRleHQpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGlkID0gdGhpcy5jYXJkU2VydmljZS5nZXRDYXJkcygpW2luZGV4XS5pZDtcbiAgICAgICAgICAgICAgICB0aGlzLmNhcmRTZXJ2aWNlLmRlbGV0ZUNhcmQoaWQpLnN1YnNjcmliZShzdWNjZXNzID0+IHsgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkl0ZW1TZWxlY3RlZChhcmdzOiBMaXN0Vmlld0V2ZW50RGF0YSkge1xuICAgICAgICB0aGlzLnNob3dGcm9udFthcmdzLmluZGV4XSA9ICF0aGlzLnNob3dGcm9udFthcmdzLmluZGV4XTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25JdGVtRGVzZWxlY3RlZChhcmdzOiBMaXN0Vmlld0V2ZW50RGF0YSkge1xuICAgICAgICB0aGlzLnNob3dGcm9udFthcmdzLmluZGV4XSA9ICF0aGlzLnNob3dGcm9udFthcmdzLmluZGV4XTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25TZXRBbGxJdGVtc0Zyb250KCkge1xuICAgICAgICB0aGlzLnNob3dGcm9udCA9IG5ldyBBcnJheSh0aGlzLmNhcmRTZXJ2aWNlLmdldENhcmRzKCkubGVuZ3RoKS5maWxsKHRydWUpO1xuICAgICAgICB0aGlzLmFsbEl0ZW1zRnJvbnQgPSB0cnVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBvblNldEFsbEl0ZW1zQmFjaygpIHtcbiAgICAgICAgdGhpcy5zaG93RnJvbnQgPSBuZXcgQXJyYXkodGhpcy5jYXJkU2VydmljZS5nZXRDYXJkcygpLmxlbmd0aCkuZmlsbChmYWxzZSk7XG4gICAgICAgIHRoaXMuYWxsSXRlbXNGcm9udCA9IGZhbHNlO1xuICAgIH1cblxufSJdfQ==