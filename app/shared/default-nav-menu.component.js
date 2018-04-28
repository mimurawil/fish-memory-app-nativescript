"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var static_data_1 = require("./static-data");
var fm_game_service_1 = require("../service/fm-game.service");
var DefaultNavMenuComponent = /** @class */ (function () {
    function DefaultNavMenuComponent(gameService) {
        this.gameService = gameService;
        this.CARDS_LIST = static_data_1.CurrentScreenEnum.CardsList;
        this.PLAY_QUIZ = static_data_1.CurrentScreenEnum.PlayQuiz;
        this.EDIT_CARD = static_data_1.CurrentScreenEnum.EditCard;
        this.QUIZ_LIST = static_data_1.CurrentScreenEnum.QuizList;
        this.EDIT_QUIZ = static_data_1.CurrentScreenEnum.EditQuiz;
    }
    DefaultNavMenuComponent.prototype.ngOnInit = function () { };
    Object.defineProperty(DefaultNavMenuComponent.prototype, "isGameRunning", {
        get: function () {
            return !this.gameService.isFinished;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], DefaultNavMenuComponent.prototype, "currentScreen", void 0);
    DefaultNavMenuComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'default-nav-menu',
            templateUrl: 'default-nav-menu.component.html',
            styleUrls: ['default-nav-menu.component.css']
        }),
        __metadata("design:paramtypes", [fm_game_service_1.FMGameService])
    ], DefaultNavMenuComponent);
    return DefaultNavMenuComponent;
}());
exports.DefaultNavMenuComponent = DefaultNavMenuComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1uYXYtbWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkZWZhdWx0LW5hdi1tZW51LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RDtBQUV6RCw2Q0FBa0Q7QUFDbEQsOERBQTJEO0FBUzNEO0lBU0ksaUNBQ1ksV0FBMEI7UUFBMUIsZ0JBQVcsR0FBWCxXQUFXLENBQWU7UUFQL0IsZUFBVSxHQUFHLCtCQUFpQixDQUFDLFNBQVMsQ0FBQztRQUN6QyxjQUFTLEdBQUcsK0JBQWlCLENBQUMsUUFBUSxDQUFDO1FBQ3ZDLGNBQVMsR0FBRywrQkFBaUIsQ0FBQyxRQUFRLENBQUM7UUFDdkMsY0FBUyxHQUFHLCtCQUFpQixDQUFDLFFBQVEsQ0FBQztRQUN2QyxjQUFTLEdBQUcsK0JBQWlCLENBQUMsUUFBUSxDQUFDO0lBSTFDLENBQUM7SUFFTCwwQ0FBUSxHQUFSLGNBQWEsQ0FBQztJQUVkLHNCQUFXLGtEQUFhO2FBQXhCO1lBQ0ksTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUM7UUFDeEMsQ0FBQzs7O09BQUE7SUFmUTtRQUFSLFlBQUssRUFBRTs7a0VBQWtDO0lBRmpDLHVCQUF1QjtRQVBuQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxrQkFBa0I7WUFDNUIsV0FBVyxFQUFFLGlDQUFpQztZQUM5QyxTQUFTLEVBQUUsQ0FBQyxnQ0FBZ0MsQ0FBQztTQUNoRCxDQUFDO3lDQVkyQiwrQkFBYTtPQVY3Qix1QkFBdUIsQ0FtQm5DO0lBQUQsOEJBQUM7Q0FBQSxBQW5CRCxJQW1CQztBQW5CWSwwREFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ3VycmVudFNjcmVlbkVudW0gfSBmcm9tICcuL3N0YXRpYy1kYXRhJztcbmltcG9ydCB7IEZNR2FtZVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlL2ZtLWdhbWUuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdkZWZhdWx0LW5hdi1tZW51JyxcbiAgICB0ZW1wbGF0ZVVybDogJ2RlZmF1bHQtbmF2LW1lbnUuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWydkZWZhdWx0LW5hdi1tZW51LmNvbXBvbmVudC5jc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIERlZmF1bHROYXZNZW51Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIEBJbnB1dCgpIGN1cnJlbnRTY3JlZW46IEN1cnJlbnRTY3JlZW5FbnVtO1xuICAgIHB1YmxpYyBDQVJEU19MSVNUID0gQ3VycmVudFNjcmVlbkVudW0uQ2FyZHNMaXN0O1xuICAgIHB1YmxpYyBQTEFZX1FVSVogPSBDdXJyZW50U2NyZWVuRW51bS5QbGF5UXVpejtcbiAgICBwdWJsaWMgRURJVF9DQVJEID0gQ3VycmVudFNjcmVlbkVudW0uRWRpdENhcmQ7XG4gICAgcHVibGljIFFVSVpfTElTVCA9IEN1cnJlbnRTY3JlZW5FbnVtLlF1aXpMaXN0O1xuICAgIHB1YmxpYyBFRElUX1FVSVogPSBDdXJyZW50U2NyZWVuRW51bS5FZGl0UXVpejtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGdhbWVTZXJ2aWNlOiBGTUdhbWVTZXJ2aWNlXG4gICAgKSB7IH1cblxuICAgIG5nT25Jbml0KCkgeyB9XG5cbiAgICBwdWJsaWMgZ2V0IGlzR2FtZVJ1bm5pbmcoKSB7XG4gICAgICAgIHJldHVybiAhdGhpcy5nYW1lU2VydmljZS5pc0ZpbmlzaGVkO1xuICAgIH1cblxufSJdfQ==