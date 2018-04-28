"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var Toast = require("nativescript-toast");
// Services
var fm_card_service_1 = require("../service/fm-card.service");
var FMCardEditComponent = /** @class */ (function () {
    function FMCardEditComponent(activatedRoute, routerExtensions, cardService) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.routerExtensions = routerExtensions;
        this.cardService = cardService;
        this.isNewCard = true;
        this.frontText = '';
        this.backText = '';
        activatedRoute.params.forEach(function (params) {
            _this._id = +params['id'];
            if (_this._id) {
                _this.isNewCard = false;
                var card = _this.cardService.getCard(_this._id);
                _this.frontText = card.frontText || '';
                _this.backText = card.backText || '';
            }
        });
    }
    FMCardEditComponent.prototype.ngOnInit = function () { };
    Object.defineProperty(FMCardEditComponent.prototype, "isSafeToSave", {
        // Auxiliary
        get: function () {
            if (this.frontText.trim() === '')
                return false;
            if (this.backText.trim() === '')
                return false;
            return true;
        },
        enumerable: true,
        configurable: true
    });
    // Event Listeners
    FMCardEditComponent.prototype.goBack = function () {
        this.routerExtensions.backToPreviousPage();
    };
    FMCardEditComponent.prototype.onSaveTapped = function () {
        var card = {
            id: this._id,
            frontText: this.frontText,
            backText: this.backText
        };
        if (this.isNewCard) {
            this.cardService.addCard(card)
                .subscribe(function (success) {
                Toast.makeText('Card Created!').show();
            });
        }
        else {
            this.cardService.updateCard(card)
                .subscribe(function (success) {
                Toast.makeText('Card Updated!').show();
            });
        }
        this.routerExtensions.navigate(['/cards'], { clearHistory: true });
    };
    FMCardEditComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'fm-card-edit',
            templateUrl: 'fm-card-edit.component.html',
            styleUrls: ['fm-card-edit.component.css']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_2.RouterExtensions,
            fm_card_service_1.FMCardService])
    ], FMCardEditComponent);
    return FMCardEditComponent;
}());
exports.FMCardEditComponent = FMCardEditComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm0tY2FyZC1lZGl0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZtLWNhcmQtZWRpdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsMENBQWlEO0FBQ2pELHNEQUErRDtBQUMvRCwwQ0FBNEM7QUFFNUMsV0FBVztBQUNYLDhEQUEyRDtBQWEzRDtJQVFJLDZCQUNZLGNBQThCLEVBQzlCLGdCQUFrQyxFQUNsQyxXQUEwQjtRQUh0QyxpQkFpQkM7UUFoQlcsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsZ0JBQVcsR0FBWCxXQUFXLENBQWU7UUFFbEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDbkIsY0FBYyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBQSxNQUFNO1lBQ2hDLEtBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDekIsRUFBRSxDQUFDLENBQUMsS0FBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ1gsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7Z0JBQ3ZCLElBQUksSUFBSSxHQUFHLEtBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEtBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDOUMsS0FBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxJQUFJLEVBQUUsQ0FBQztnQkFDdEMsS0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQztZQUN4QyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsc0NBQVEsR0FBUixjQUFhLENBQUM7SUFHZCxzQkFBVyw2Q0FBWTtRQUR2QixZQUFZO2FBQ1o7WUFDSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQztnQkFBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1lBQy9DLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDO2dCQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7WUFFOUMsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNoQixDQUFDOzs7T0FBQTtJQUVELGtCQUFrQjtJQUNYLG9DQUFNLEdBQWI7UUFDSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUMvQyxDQUFDO0lBRU0sMENBQVksR0FBbkI7UUFDSSxJQUFNLElBQUksR0FBVztZQUNqQixFQUFFLEVBQUUsSUFBSSxDQUFDLEdBQUc7WUFDWixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDekIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1NBQzFCLENBQUM7UUFDRixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNqQixJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7aUJBQ3pCLFNBQVMsQ0FDTixVQUFBLE9BQU87Z0JBQ0gsS0FBSyxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUMzQyxDQUFDLENBQ0osQ0FBQztRQUNWLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQztpQkFDNUIsU0FBUyxDQUNOLFVBQUEsT0FBTztnQkFDSCxLQUFLLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQzNDLENBQUMsQ0FDSixDQUFDO1FBQ1YsQ0FBQztRQUNELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7SUFoRVEsbUJBQW1CO1FBUC9CLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGNBQWM7WUFDeEIsV0FBVyxFQUFFLDZCQUE2QjtZQUMxQyxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztTQUM1QyxDQUFDO3lDQVc4Qix1QkFBYztZQUNaLHlCQUFnQjtZQUNyQiwrQkFBYTtPQVg3QixtQkFBbUIsQ0FpRS9CO0lBQUQsMEJBQUM7Q0FBQSxBQWpFRCxJQWlFQztBQWpFWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgKiBhcyBUb2FzdCBmcm9tICduYXRpdmVzY3JpcHQtdG9hc3QnO1xuXG4vLyBTZXJ2aWNlc1xuaW1wb3J0IHsgRk1DYXJkU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2UvZm0tY2FyZC5zZXJ2aWNlJztcblxuLy8gU3RhdGljcyAmIERvbWFpbnNcbmltcG9ydCB7IEZpc2hNZW1vcnlEb21haW4gfSBmcm9tICcuLi90eXBpbmcvZG9tYWlucyc7XG5pbXBvcnQgRk1DYXJkID0gRmlzaE1lbW9yeURvbWFpbi5GTUNhcmQ7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdmbS1jYXJkLWVkaXQnLFxuICAgIHRlbXBsYXRlVXJsOiAnZm0tY2FyZC1lZGl0LmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnZm0tY2FyZC1lZGl0LmNvbXBvbmVudC5jc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIEZNQ2FyZEVkaXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgcHVibGljIGlzTmV3Q2FyZDogYm9vbGVhbjtcbiAgICBwdWJsaWMgZnJvbnRUZXh0OiBzdHJpbmc7XG4gICAgcHVibGljIGJhY2tUZXh0OiBzdHJpbmc7XG5cbiAgICBwcml2YXRlIF9pZDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgICAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXG4gICAgICAgIHByaXZhdGUgY2FyZFNlcnZpY2U6IEZNQ2FyZFNlcnZpY2VcbiAgICApIHtcbiAgICAgICAgdGhpcy5pc05ld0NhcmQgPSB0cnVlO1xuICAgICAgICB0aGlzLmZyb250VGV4dCA9ICcnO1xuICAgICAgICB0aGlzLmJhY2tUZXh0ID0gJyc7XG4gICAgICAgIGFjdGl2YXRlZFJvdXRlLnBhcmFtcy5mb3JFYWNoKHBhcmFtcyA9PiB7XG4gICAgICAgICAgICB0aGlzLl9pZCA9ICtwYXJhbXNbJ2lkJ107XG4gICAgICAgICAgICBpZiAodGhpcy5faWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzTmV3Q2FyZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGxldCBjYXJkID0gdGhpcy5jYXJkU2VydmljZS5nZXRDYXJkKHRoaXMuX2lkKTtcbiAgICAgICAgICAgICAgICB0aGlzLmZyb250VGV4dCA9IGNhcmQuZnJvbnRUZXh0IHx8ICcnO1xuICAgICAgICAgICAgICAgIHRoaXMuYmFja1RleHQgPSBjYXJkLmJhY2tUZXh0IHx8ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHsgfVxuXG4gICAgLy8gQXV4aWxpYXJ5XG4gICAgcHVibGljIGdldCBpc1NhZmVUb1NhdmUoKTogYm9vbGVhbiB7XG4gICAgICAgIGlmICh0aGlzLmZyb250VGV4dC50cmltKCkgPT09ICcnKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmICh0aGlzLmJhY2tUZXh0LnRyaW0oKSA9PT0gJycpIHJldHVybiBmYWxzZTtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBFdmVudCBMaXN0ZW5lcnNcbiAgICBwdWJsaWMgZ29CYWNrKCkge1xuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMuYmFja1RvUHJldmlvdXNQYWdlKCk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uU2F2ZVRhcHBlZCgpIHtcbiAgICAgICAgY29uc3QgY2FyZDogRk1DYXJkID0ge1xuICAgICAgICAgICAgaWQ6IHRoaXMuX2lkLFxuICAgICAgICAgICAgZnJvbnRUZXh0OiB0aGlzLmZyb250VGV4dCxcbiAgICAgICAgICAgIGJhY2tUZXh0OiB0aGlzLmJhY2tUZXh0XG4gICAgICAgIH07XG4gICAgICAgIGlmICh0aGlzLmlzTmV3Q2FyZCkge1xuICAgICAgICAgICAgdGhpcy5jYXJkU2VydmljZS5hZGRDYXJkKGNhcmQpXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBUb2FzdC5tYWtlVGV4dCgnQ2FyZCBDcmVhdGVkIScpLnNob3coKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNhcmRTZXJ2aWNlLnVwZGF0ZUNhcmQoY2FyZClcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFRvYXN0Lm1ha2VUZXh0KCdDYXJkIFVwZGF0ZWQhJykuc2hvdygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoWycvY2FyZHMnXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XG4gICAgfVxufSJdfQ==