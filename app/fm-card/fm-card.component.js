"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var FMCardComponent = /** @class */ (function () {
    function FMCardComponent() {
        this.flip = false;
        this.isFlipping = true;
    }
    FMCardComponent.prototype.ngOnInit = function () {
        this.isFront = true;
    };
    Object.defineProperty(FMCardComponent.prototype, "cardText", {
        // Auxiliary
        get: function () {
            return this.isFront ? this.myCard.frontText : this.myCard.backText;
        },
        enumerable: true,
        configurable: true
    });
    FMCardComponent.prototype.flipAnimation = function () {
        var _this = this;
        this.flip = true;
        this.isFlipping = true;
        setTimeout(function () {
            _this.flip = false;
            _this.isFlipping = false;
        }, 750);
    };
    // Event Listeners
    FMCardComponent.prototype.onCardTapped = function () {
        var _this = this;
        this.flipAnimation();
        setTimeout(function () {
            if (_this.isFlipping) {
                _this.isFront = !_this.isFront;
                _this.isFlipping = false;
            }
        }, 250);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], FMCardComponent.prototype, "myCard", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], FMCardComponent.prototype, "isFront", void 0);
    FMCardComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'fm-card',
            templateUrl: 'fm-card.component.html',
            styleUrls: ['fm-card.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], FMCardComponent);
    return FMCardComponent;
}());
exports.FMCardComponent = FMCardComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm0tY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmbS1jYXJkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RDtBQWF6RDtJQU9JO1FBSE8sU0FBSSxHQUFZLEtBQUssQ0FBQztRQUNyQixlQUFVLEdBQVksSUFBSSxDQUFDO0lBRW5CLENBQUM7SUFFakIsa0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQ3hCLENBQUM7SUFHRCxzQkFBVyxxQ0FBUTtRQURuQixZQUFZO2FBQ1o7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDO1FBQ3ZFLENBQUM7OztPQUFBO0lBRU8sdUNBQWEsR0FBckI7UUFBQSxpQkFPQztRQU5HLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLFVBQVUsQ0FBQztZQUNQLEtBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO1lBQ2xCLEtBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQzVCLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNaLENBQUM7SUFFRCxrQkFBa0I7SUFDWCxzQ0FBWSxHQUFuQjtRQUFBLGlCQVFDO1FBUEcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3JCLFVBQVUsQ0FBQztZQUNQLEVBQUUsQ0FBQyxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO2dCQUNsQixLQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQztnQkFDN0IsS0FBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7WUFDNUIsQ0FBQztRQUNMLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNaLENBQUM7SUFsQ1E7UUFBUixZQUFLLEVBQUU7O21EQUFnQjtJQUNmO1FBQVIsWUFBSyxFQUFFOztvREFBa0I7SUFIakIsZUFBZTtRQVAzQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxTQUFTO1lBQ25CLFdBQVcsRUFBRSx3QkFBd0I7WUFDckMsU0FBUyxFQUFFLENBQUMsdUJBQXVCLENBQUM7U0FDdkMsQ0FBQzs7T0FFVyxlQUFlLENBc0MzQjtJQUFELHNCQUFDO0NBQUEsQUF0Q0QsSUFzQ0M7QUF0Q1ksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLy8gU3RhdGljcyAmIERvbWFpbnNcbmltcG9ydCB7IEZpc2hNZW1vcnlEb21haW4gfSBmcm9tICcuLi90eXBpbmcvZG9tYWlucyc7XG5pbXBvcnQgRk1DYXJkID0gRmlzaE1lbW9yeURvbWFpbi5GTUNhcmQ7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdmbS1jYXJkJyxcbiAgICB0ZW1wbGF0ZVVybDogJ2ZtLWNhcmQuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWydmbS1jYXJkLmNvbXBvbmVudC5jc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIEZNQ2FyZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBASW5wdXQoKSBteUNhcmQ6IEZNQ2FyZDtcbiAgICBASW5wdXQoKSBpc0Zyb250OiBib29sZWFuO1xuICAgIHB1YmxpYyBmbGlwOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBpc0ZsaXBwaW5nOiBib29sZWFuID0gdHJ1ZTtcblxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5pc0Zyb250ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBBdXhpbGlhcnlcbiAgICBwdWJsaWMgZ2V0IGNhcmRUZXh0KCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzRnJvbnQgPyB0aGlzLm15Q2FyZC5mcm9udFRleHQgOiB0aGlzLm15Q2FyZC5iYWNrVGV4dDtcbiAgICB9XG5cbiAgICBwcml2YXRlIGZsaXBBbmltYXRpb24oKSB7XG4gICAgICAgIHRoaXMuZmxpcCA9IHRydWU7XG4gICAgICAgIHRoaXMuaXNGbGlwcGluZyA9IHRydWU7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5mbGlwID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmlzRmxpcHBpbmcgPSBmYWxzZTtcbiAgICAgICAgfSwgNzUwKTtcbiAgICB9XG5cbiAgICAvLyBFdmVudCBMaXN0ZW5lcnNcbiAgICBwdWJsaWMgb25DYXJkVGFwcGVkKCkge1xuICAgICAgICB0aGlzLmZsaXBBbmltYXRpb24oKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5pc0ZsaXBwaW5nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0Zyb250ID0gIXRoaXMuaXNGcm9udDtcbiAgICAgICAgICAgICAgICB0aGlzLmlzRmxpcHBpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgMjUwKTtcbiAgICB9XG5cbn0iXX0=