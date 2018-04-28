"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
// Telerik Components
var angular_1 = require("nativescript-ui-listview/angular");
var fm_card_service_1 = require("../service/fm-card.service");
var FMCardsPickModalComponent = /** @class */ (function () {
    function FMCardsPickModalComponent(params, cardService) {
        this.params = params;
        this.cardService = cardService;
        this.showFront = true;
        this.cardService.filter({ without: params.context.alreadySelected });
    }
    // Lifecycle
    FMCardsPickModalComponent.prototype.ngOnInit = function () {
        this.selectedItems = new Array(this.cardService.getCards().length).fill(false);
    };
    FMCardsPickModalComponent.prototype.ngOnDestroy = function () {
        this.cardService.clearFilter();
    };
    Object.defineProperty(FMCardsPickModalComponent.prototype, "dataItems", {
        //Auxiliary
        get: function () {
            return this.cardService.getCards();
        },
        enumerable: true,
        configurable: true
    });
    // Event Listeners
    FMCardsPickModalComponent.prototype.onConfirmTapped = function () {
        this.params.closeCallback(this.listViewComponent.listView.getSelectedItems());
    };
    FMCardsPickModalComponent.prototype.onSetAllItemsFront = function () {
        this.showFront = true;
    };
    FMCardsPickModalComponent.prototype.onSetAllItemsBack = function () {
        this.showFront = false;
    };
    FMCardsPickModalComponent.prototype.onItemSelected = function (args) {
        this.selectedItems[args.index] = true;
    };
    FMCardsPickModalComponent.prototype.onItemDeselected = function (args) {
        this.selectedItems[args.index] = false;
    };
    __decorate([
        core_1.ViewChild('myListView'),
        __metadata("design:type", angular_1.RadListViewComponent)
    ], FMCardsPickModalComponent.prototype, "listViewComponent", void 0);
    FMCardsPickModalComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'cards-pick-modal',
            templateUrl: 'cards-pick-modal.component.html',
            styleUrls: ['cards-pick-modal.component.css']
        }),
        __metadata("design:paramtypes", [modal_dialog_1.ModalDialogParams,
            fm_card_service_1.FMCardService])
    ], FMCardsPickModalComponent);
    return FMCardsPickModalComponent;
}());
exports.FMCardsPickModalComponent = FMCardsPickModalComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZHMtcGljay1tb2RhbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjYXJkcy1waWNrLW1vZGFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF3RTtBQUV4RSxrRUFBc0U7QUFFdEUscUJBQXFCO0FBQ3JCLDREQUF3RTtBQUV4RSw4REFBMkQ7QUFTM0Q7SUFNSSxtQ0FDWSxNQUF5QixFQUN6QixXQUEwQjtRQUQxQixXQUFNLEdBQU4sTUFBTSxDQUFtQjtRQUN6QixnQkFBVyxHQUFYLFdBQVcsQ0FBZTtRQUVsQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxFQUFFLE9BQU8sRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUM7SUFDekUsQ0FBQztJQUVELFlBQVk7SUFDWiw0Q0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNuRixDQUFDO0lBRUQsK0NBQVcsR0FBWDtRQUNJLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDbkMsQ0FBQztJQUdELHNCQUFXLGdEQUFTO1FBRHBCLFdBQVc7YUFDWDtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3ZDLENBQUM7OztPQUFBO0lBRUQsa0JBQWtCO0lBQ1gsbURBQWUsR0FBdEI7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQztJQUNsRixDQUFDO0lBRU0sc0RBQWtCLEdBQXpCO1FBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7SUFDMUIsQ0FBQztJQUVNLHFEQUFpQixHQUF4QjtRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0lBQzNCLENBQUM7SUFFTSxrREFBYyxHQUFyQixVQUFzQixJQUF1QjtRQUN6QyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUM7SUFDMUMsQ0FBQztJQUVNLG9EQUFnQixHQUF2QixVQUF3QixJQUF1QjtRQUMzQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUM7SUFDM0MsQ0FBQztJQTdDd0I7UUFBeEIsZ0JBQVMsQ0FBQyxZQUFZLENBQUM7a0NBQW9CLDhCQUFvQjt3RUFBQztJQUZ4RCx5QkFBeUI7UUFQckMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsa0JBQWtCO1lBQzVCLFdBQVcsRUFBRSxpQ0FBaUM7WUFDOUMsU0FBUyxFQUFFLENBQUMsZ0NBQWdDLENBQUM7U0FDaEQsQ0FBQzt5Q0FTc0IsZ0NBQWlCO1lBQ1osK0JBQWE7T0FSN0IseUJBQXlCLENBa0RyQztJQUFELGdDQUFDO0NBQUEsQUFsREQsSUFrREM7QUFsRFksOERBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE1vZGFsRGlhbG9nUGFyYW1zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvbW9kYWwtZGlhbG9nJztcblxuLy8gVGVsZXJpayBDb21wb25lbnRzXG5pbXBvcnQgeyBSYWRMaXN0Vmlld0NvbXBvbmVudCB9IGZyb20gJ25hdGl2ZXNjcmlwdC11aS1saXN0dmlldy9hbmd1bGFyJztcbmltcG9ydCB7IExpc3RWaWV3RXZlbnREYXRhIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3JztcbmltcG9ydCB7IEZNQ2FyZFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlL2ZtLWNhcmQuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdjYXJkcy1waWNrLW1vZGFsJyxcbiAgICB0ZW1wbGF0ZVVybDogJ2NhcmRzLXBpY2stbW9kYWwuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWydjYXJkcy1waWNrLW1vZGFsLmNvbXBvbmVudC5jc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIEZNQ2FyZHNQaWNrTW9kYWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgICBAVmlld0NoaWxkKCdteUxpc3RWaWV3JykgbGlzdFZpZXdDb21wb25lbnQ6IFJhZExpc3RWaWV3Q29tcG9uZW50O1xuICAgIHB1YmxpYyBzaG93RnJvbnQ6IGJvb2xlYW47XG4gICAgcHVibGljIHNlbGVjdGVkSXRlbXM6IGJvb2xlYW5bXTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHBhcmFtczogTW9kYWxEaWFsb2dQYXJhbXMsXG4gICAgICAgIHByaXZhdGUgY2FyZFNlcnZpY2U6IEZNQ2FyZFNlcnZpY2VcbiAgICApIHtcbiAgICAgICAgdGhpcy5zaG93RnJvbnQgPSB0cnVlO1xuICAgICAgICB0aGlzLmNhcmRTZXJ2aWNlLmZpbHRlcih7IHdpdGhvdXQ6IHBhcmFtcy5jb250ZXh0LmFscmVhZHlTZWxlY3RlZCB9KTtcbiAgICB9XG5cbiAgICAvLyBMaWZlY3ljbGVcbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1zID0gbmV3IEFycmF5KHRoaXMuY2FyZFNlcnZpY2UuZ2V0Q2FyZHMoKS5sZW5ndGgpLmZpbGwoZmFsc2UpO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLmNhcmRTZXJ2aWNlLmNsZWFyRmlsdGVyKCk7XG4gICAgfVxuXG4gICAgLy9BdXhpbGlhcnlcbiAgICBwdWJsaWMgZ2V0IGRhdGFJdGVtcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FyZFNlcnZpY2UuZ2V0Q2FyZHMoKTtcbiAgICB9XG5cbiAgICAvLyBFdmVudCBMaXN0ZW5lcnNcbiAgICBwdWJsaWMgb25Db25maXJtVGFwcGVkKCkge1xuICAgICAgICB0aGlzLnBhcmFtcy5jbG9zZUNhbGxiYWNrKHRoaXMubGlzdFZpZXdDb21wb25lbnQubGlzdFZpZXcuZ2V0U2VsZWN0ZWRJdGVtcygpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25TZXRBbGxJdGVtc0Zyb250KCkge1xuICAgICAgICB0aGlzLnNob3dGcm9udCA9IHRydWU7XG4gICAgfVxuXG4gICAgcHVibGljIG9uU2V0QWxsSXRlbXNCYWNrKCkge1xuICAgICAgICB0aGlzLnNob3dGcm9udCA9IGZhbHNlO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkl0ZW1TZWxlY3RlZChhcmdzOiBMaXN0Vmlld0V2ZW50RGF0YSkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbXNbYXJncy5pbmRleF0gPSB0cnVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkl0ZW1EZXNlbGVjdGVkKGFyZ3M6IExpc3RWaWV3RXZlbnREYXRhKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtc1thcmdzLmluZGV4XSA9IGZhbHNlO1xuICAgIH1cblxuXG59Il19