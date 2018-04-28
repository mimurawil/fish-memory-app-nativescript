"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var fm_database_service_1 = require("./service/fm-database.service");
var fm_card_service_1 = require("./service/fm-card.service");
var fm_quiz_service_1 = require("./service/fm-quiz.service");
var AppComponent = /** @class */ (function () {
    function AppComponent(dbService, cardService, quizService) {
        this.dbService = dbService;
        this.cardService = cardService;
        this.quizService = quizService;
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: "ns-app",
            templateUrl: "app.component.html",
        }),
        __metadata("design:paramtypes", [fm_database_service_1.FMDatabaseService,
            fm_card_service_1.FMCardService,
            fm_quiz_service_1.FMQuizService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMscUVBQWtFO0FBQ2xFLDZEQUEwRDtBQUMxRCw2REFBMEQ7QUFPMUQ7SUFFSSxzQkFDWSxTQUE0QixFQUM1QixXQUEwQixFQUMxQixXQUEwQjtRQUYxQixjQUFTLEdBQVQsU0FBUyxDQUFtQjtRQUM1QixnQkFBVyxHQUFYLFdBQVcsQ0FBZTtRQUMxQixnQkFBVyxHQUFYLFdBQVcsQ0FBZTtJQUNsQyxDQUFDO0lBTkksWUFBWTtRQUx4QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsV0FBVyxFQUFFLG9CQUFvQjtTQUNwQyxDQUFDO3lDQUt5Qix1Q0FBaUI7WUFDZiwrQkFBYTtZQUNiLCtCQUFhO09BTDdCLFlBQVksQ0FPeEI7SUFBRCxtQkFBQztDQUFBLEFBUEQsSUFPQztBQVBZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEZNRGF0YWJhc2VTZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZS9mbS1kYXRhYmFzZS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBGTUNhcmRTZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZS9mbS1jYXJkLnNlcnZpY2VcIjtcbmltcG9ydCB7IEZNUXVpelNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlL2ZtLXF1aXouc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1hcHBcIixcbiAgICB0ZW1wbGF0ZVVybDogXCJhcHAuY29tcG9uZW50Lmh0bWxcIixcbn0pXG5cbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgZGJTZXJ2aWNlOiBGTURhdGFiYXNlU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBjYXJkU2VydmljZTogRk1DYXJkU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBxdWl6U2VydmljZTogRk1RdWl6U2VydmljZVxuICAgICkgeyB9XG59XG4iXX0=