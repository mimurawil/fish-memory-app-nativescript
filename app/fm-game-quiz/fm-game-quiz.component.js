"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var router_2 = require("@angular/router");
var dialogs_1 = require("ui/dialogs");
// Services
var fm_game_service_1 = require("../service/fm-game.service");
var FMGameQuizComponent = /** @class */ (function () {
    function FMGameQuizComponent(gameService, routerExtensions, activatedRoute) {
        var _this = this;
        this.gameService = gameService;
        this.routerExtensions = routerExtensions;
        this.activatedRoute = activatedRoute;
        this.next = false;
        activatedRoute.params.forEach(function (params) {
            _this._id = +params['id'];
            if (_this._id) {
                gameService.newQuiz(_this._id);
            }
        });
    }
    FMGameQuizComponent.prototype.ngOnInit = function () {
        this.nextCardAnimation();
    };
    Object.defineProperty(FMGameQuizComponent.prototype, "card", {
        // Auxiliary
        get: function () {
            return this.gameService.aCard;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FMGameQuizComponent.prototype, "quizEnded", {
        get: function () {
            return this.gameService.isFinished;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FMGameQuizComponent.prototype, "currentScore", {
        get: function () {
            return this.gameService.score;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FMGameQuizComponent.prototype, "totalScore", {
        get: function () {
            return this.gameService.totalQuestions;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FMGameQuizComponent.prototype, "currentQuestion", {
        get: function () {
            return this.gameService.currentQuestion;
        },
        enumerable: true,
        configurable: true
    });
    FMGameQuizComponent.prototype.nextCardAnimation = function () {
        var _this = this;
        this.next = true;
        setTimeout(function () {
            _this.next = false;
        }, 500);
    };
    FMGameQuizComponent.prototype.addToStatistics = function () {
        var options = {
            title: 'Quiz Ended',
            // message: `Your score is ${this.gameService.score} of ${this.gameService.totalQuestions}.\nWould you like to add to your statistics?`,
            message: "Your score is " + this.gameService.score + " of " + this.gameService.totalQuestions + ".",
            // okButtonText: 'Yes',
            // cancelButtonText: 'No'
            okButtonText: 'Okay'
        };
        dialogs_1.confirm(options).then(function (yes) {
            if (yes) {
                // this.gameService.addToStatistics();
                // Toast.makeText('Score added to statistics.').show();
            }
        });
    };
    // Event Listeners
    FMGameQuizComponent.prototype.onExitQuizTapped = function () {
        this.routerExtensions.backToPreviousPage();
    };
    FMGameQuizComponent.prototype.onRestartQuizTapped = function () {
        this.gameService.newQuiz();
        this.nextCardAnimation();
    };
    FMGameQuizComponent.prototype.onWrongTapped = function () {
        this.gameService.gotWrong();
        if (!this.quizEnded) {
            this.nextCardAnimation();
        }
        else {
            this.addToStatistics();
        }
    };
    FMGameQuizComponent.prototype.onRightTapped = function () {
        this.gameService.gotRight();
        if (!this.quizEnded) {
            this.nextCardAnimation();
        }
        else {
            this.addToStatistics();
        }
    };
    FMGameQuizComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'fm-game-quiz',
            templateUrl: 'fm-game-quiz.component.html',
            styleUrls: ['fm-game-quiz.component.css']
        }),
        __metadata("design:paramtypes", [fm_game_service_1.FMGameService,
            router_1.RouterExtensions,
            router_2.ActivatedRoute])
    ], FMGameQuizComponent);
    return FMGameQuizComponent;
}());
exports.FMGameQuizComponent = FMGameQuizComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm0tZ2FtZS1xdWl6LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZtLWdhbWUtcXVpei5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsc0RBQStEO0FBQy9ELDBDQUFpRDtBQUNqRCxzQ0FBcUQ7QUFFckQsV0FBVztBQUNYLDhEQUEyRDtBQVkzRDtJQU1JLDZCQUNZLFdBQTBCLEVBQzFCLGdCQUFrQyxFQUNsQyxjQUE4QjtRQUgxQyxpQkFhQztRQVpXLGdCQUFXLEdBQVgsV0FBVyxDQUFlO1FBQzFCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBRXRDLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLGNBQWMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQUEsTUFBTTtZQUNoQyxLQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3pCLEVBQUUsQ0FBQyxDQUFDLEtBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUNYLFdBQVcsQ0FBQyxPQUFPLENBQUMsS0FBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2xDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUVQLENBQUM7SUFFRCxzQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUdELHNCQUFXLHFDQUFJO1FBRGYsWUFBWTthQUNaO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDO1FBQ2xDLENBQUM7OztPQUFBO0lBRUQsc0JBQVcsMENBQVM7YUFBcEI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUM7UUFDdkMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVyw2Q0FBWTthQUF2QjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQztRQUNsQyxDQUFDOzs7T0FBQTtJQUVELHNCQUFXLDJDQUFVO2FBQXJCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDO1FBQzNDLENBQUM7OztPQUFBO0lBRUQsc0JBQVcsZ0RBQWU7YUFBMUI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUM7UUFDNUMsQ0FBQzs7O09BQUE7SUFFTywrQ0FBaUIsR0FBekI7UUFBQSxpQkFLQztRQUpHLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLFVBQVUsQ0FBQztZQUNQLEtBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNaLENBQUM7SUFFTyw2Q0FBZSxHQUF2QjtRQUNJLElBQUksT0FBTyxHQUFtQjtZQUMxQixLQUFLLEVBQUUsWUFBWTtZQUNuQix3SUFBd0k7WUFDeEksT0FBTyxFQUFFLG1CQUFpQixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssWUFBTyxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsTUFBRztZQUN6Rix1QkFBdUI7WUFDdkIseUJBQXlCO1lBQ3pCLFlBQVksRUFBRSxNQUFNO1NBQ3ZCLENBQUM7UUFDRixpQkFBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLEdBQUc7WUFDckIsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDTixzQ0FBc0M7Z0JBQ3RDLHVEQUF1RDtZQUMzRCxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsa0JBQWtCO0lBQ1gsOENBQWdCLEdBQXZCO1FBQ0ksSUFBSSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDL0MsQ0FBQztJQUVNLGlEQUFtQixHQUExQjtRQUNJLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVNLDJDQUFhLEdBQXBCO1FBQ0ksSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUM1QixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQzdCLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUMzQixDQUFDO0lBQ0wsQ0FBQztJQUVNLDJDQUFhLEdBQXBCO1FBQ0ksSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUM1QixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQzdCLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUMzQixDQUFDO0lBQ0wsQ0FBQztJQWhHUSxtQkFBbUI7UUFQL0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsY0FBYztZQUN4QixXQUFXLEVBQUUsNkJBQTZCO1lBQzFDLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixDQUFDO1NBQzVDLENBQUM7eUNBUzJCLCtCQUFhO1lBQ1IseUJBQWdCO1lBQ2xCLHVCQUFjO09BVGpDLG1CQUFtQixDQWtHL0I7SUFBRCwwQkFBQztDQUFBLEFBbEdELElBa0dDO0FBbEdZLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IENvbmZpcm1PcHRpb25zLCBjb25maXJtIH0gZnJvbSAndWkvZGlhbG9ncyc7XG5cbi8vIFNlcnZpY2VzXG5pbXBvcnQgeyBGTUdhbWVTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZS9mbS1nYW1lLnNlcnZpY2UnO1xuXG4vLyBUb2FzdCBNZXNzYWdlc1xuaW1wb3J0ICogYXMgVG9hc3QgZnJvbSAnbmF0aXZlc2NyaXB0LXRvYXN0JztcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ2ZtLWdhbWUtcXVpeicsXG4gICAgdGVtcGxhdGVVcmw6ICdmbS1nYW1lLXF1aXouY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWydmbS1nYW1lLXF1aXouY29tcG9uZW50LmNzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgRk1HYW1lUXVpekNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBwcml2YXRlIF9pZDogbnVtYmVyO1xuXG4gICAgcHVibGljIG5leHQ6IGJvb2xlYW47IC8vIGNvbnRyb2xsaW5nIHVpXG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBnYW1lU2VydmljZTogRk1HYW1lU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLFxuICAgICAgICBwcml2YXRlIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVxuICAgICkge1xuICAgICAgICB0aGlzLm5leHQgPSBmYWxzZTtcbiAgICAgICAgYWN0aXZhdGVkUm91dGUucGFyYW1zLmZvckVhY2gocGFyYW1zID0+IHtcbiAgICAgICAgICAgIHRoaXMuX2lkID0gK3BhcmFtc1snaWQnXTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9pZCkge1xuICAgICAgICAgICAgICAgIGdhbWVTZXJ2aWNlLm5ld1F1aXoodGhpcy5faWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLm5leHRDYXJkQW5pbWF0aW9uKCk7XG4gICAgfVxuXG4gICAgLy8gQXV4aWxpYXJ5XG4gICAgcHVibGljIGdldCBjYXJkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nYW1lU2VydmljZS5hQ2FyZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IHF1aXpFbmRlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2FtZVNlcnZpY2UuaXNGaW5pc2hlZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGN1cnJlbnRTY29yZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2FtZVNlcnZpY2Uuc2NvcmU7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCB0b3RhbFNjb3JlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nYW1lU2VydmljZS50b3RhbFF1ZXN0aW9ucztcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGN1cnJlbnRRdWVzdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2FtZVNlcnZpY2UuY3VycmVudFF1ZXN0aW9uO1xuICAgIH1cblxuICAgIHByaXZhdGUgbmV4dENhcmRBbmltYXRpb24oKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHRydWU7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5uZXh0ID0gZmFsc2U7XG4gICAgICAgIH0sIDUwMCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhZGRUb1N0YXRpc3RpY3MoKSB7XG4gICAgICAgIGxldCBvcHRpb25zOiBDb25maXJtT3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHRpdGxlOiAnUXVpeiBFbmRlZCcsXG4gICAgICAgICAgICAvLyBtZXNzYWdlOiBgWW91ciBzY29yZSBpcyAke3RoaXMuZ2FtZVNlcnZpY2Uuc2NvcmV9IG9mICR7dGhpcy5nYW1lU2VydmljZS50b3RhbFF1ZXN0aW9uc30uXFxuV291bGQgeW91IGxpa2UgdG8gYWRkIHRvIHlvdXIgc3RhdGlzdGljcz9gLFxuICAgICAgICAgICAgbWVzc2FnZTogYFlvdXIgc2NvcmUgaXMgJHt0aGlzLmdhbWVTZXJ2aWNlLnNjb3JlfSBvZiAke3RoaXMuZ2FtZVNlcnZpY2UudG90YWxRdWVzdGlvbnN9LmAsXG4gICAgICAgICAgICAvLyBva0J1dHRvblRleHQ6ICdZZXMnLFxuICAgICAgICAgICAgLy8gY2FuY2VsQnV0dG9uVGV4dDogJ05vJ1xuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiAnT2theSdcbiAgICAgICAgfTtcbiAgICAgICAgY29uZmlybShvcHRpb25zKS50aGVuKHllcyA9PiB7XG4gICAgICAgICAgICBpZiAoeWVzKSB7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5nYW1lU2VydmljZS5hZGRUb1N0YXRpc3RpY3MoKTtcbiAgICAgICAgICAgICAgICAvLyBUb2FzdC5tYWtlVGV4dCgnU2NvcmUgYWRkZWQgdG8gc3RhdGlzdGljcy4nKS5zaG93KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIEV2ZW50IExpc3RlbmVyc1xuICAgIHB1YmxpYyBvbkV4aXRRdWl6VGFwcGVkKCkge1xuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMuYmFja1RvUHJldmlvdXNQYWdlKCk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uUmVzdGFydFF1aXpUYXBwZWQoKSB7XG4gICAgICAgIHRoaXMuZ2FtZVNlcnZpY2UubmV3UXVpeigpO1xuICAgICAgICB0aGlzLm5leHRDYXJkQW5pbWF0aW9uKCk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uV3JvbmdUYXBwZWQoKSB7XG4gICAgICAgIHRoaXMuZ2FtZVNlcnZpY2UuZ290V3JvbmcoKTtcbiAgICAgICAgaWYgKCF0aGlzLnF1aXpFbmRlZCkge1xuICAgICAgICAgICAgdGhpcy5uZXh0Q2FyZEFuaW1hdGlvbigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hZGRUb1N0YXRpc3RpY3MoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBvblJpZ2h0VGFwcGVkKCkge1xuICAgICAgICB0aGlzLmdhbWVTZXJ2aWNlLmdvdFJpZ2h0KCk7XG4gICAgICAgIGlmICghdGhpcy5xdWl6RW5kZWQpIHtcbiAgICAgICAgICAgIHRoaXMubmV4dENhcmRBbmltYXRpb24oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYWRkVG9TdGF0aXN0aWNzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbn0iXX0=