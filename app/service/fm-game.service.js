"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
// Services
var fm_statistics_service_1 = require("../service/fm-statistics.service");
var fm_quiz_service_1 = require("./fm-quiz.service");
// Statics & Domains
var static_data_1 = require("../shared/static-data");
var FMGameService = /** @class */ (function () {
    function FMGameService(statisticsService, quizService) {
        this.statisticsService = statisticsService;
        this.quizService = quizService;
        // this._myQuiz = [];
        this._score = 0;
        this._totalQuestions = 0;
        this._currentQuestion = 0;
        this._startDate = undefined;
        this._finishDate = undefined;
        this._isFinished = true;
    }
    FMGameService.prototype.nextCard = function () {
        if (this._currentQuestion < this._totalQuestions - 1) {
            this._currentQuestion++;
        }
        else {
            this._isFinished = true;
            if (!this._finishDate) {
                this._finishDate = new Date();
            }
        }
    };
    FMGameService.prototype.newQuiz = function (id) {
        if (id === void 0) { id = 0; }
        if (id > 0) {
            this._myQuiz = this.quizService.getQuiz(id);
        }
        this._score = 0;
        this._totalQuestions = this._myQuiz.cards.length;
        this._currentQuestion = 0;
        this._startDate = new Date();
        this._finishDate = undefined;
        this._isFinished = false;
    };
    Object.defineProperty(FMGameService.prototype, "aCard", {
        get: function () {
            return this._myQuiz.cards[this._currentQuestion];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FMGameService.prototype, "score", {
        get: function () {
            return this._score;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FMGameService.prototype, "isFinished", {
        get: function () {
            return this._isFinished;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FMGameService.prototype, "totalQuestions", {
        get: function () {
            return this._totalQuestions;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FMGameService.prototype, "currentQuestion", {
        get: function () {
            return this._currentQuestion + 1;
        },
        enumerable: true,
        configurable: true
    });
    FMGameService.prototype.gotRight = function () {
        this._score++;
        this.nextCard();
    };
    FMGameService.prototype.gotWrong = function () {
        this.nextCard();
    };
    FMGameService.prototype.addToStatistics = function () {
        var statistic = {
            quizType: static_data_1.QuizTypeEnum.FlashCard,
            startDate: this._startDate,
            finishDate: this._finishDate,
            totalQuestions: this._totalQuestions,
            totalRight: this._score,
            totalWrong: this._totalQuestions - this._score,
            score: this._score
        };
        this.statisticsService.add(statistic);
    };
    FMGameService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [fm_statistics_service_1.FMStatisticsService,
            fm_quiz_service_1.FMQuizService])
    ], FMGameService);
    return FMGameService;
}());
exports.FMGameService = FMGameService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm0tZ2FtZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZm0tZ2FtZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBRTNDLFdBQVc7QUFDWCwwRUFBdUU7QUFDdkUscURBQWtEO0FBRWxELG9CQUFvQjtBQUNwQixxREFBcUQ7QUFRckQ7SUFVSSx1QkFDWSxpQkFBc0MsRUFDdEMsV0FBMEI7UUFEMUIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFxQjtRQUN0QyxnQkFBVyxHQUFYLFdBQVcsQ0FBZTtRQUVsQyxxQkFBcUI7UUFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDaEIsSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztRQUM1QixJQUFJLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQztRQUM3QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztJQUM1QixDQUFDO0lBRU8sZ0NBQVEsR0FBaEI7UUFDSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25ELElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQzVCLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1lBQ3hCLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7Z0JBQ3BCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztZQUNsQyxDQUFDO1FBQ0wsQ0FBQztJQUNMLENBQUM7SUFFTSwrQkFBTyxHQUFkLFVBQWUsRUFBYztRQUFkLG1CQUFBLEVBQUEsTUFBYztRQUN6QixFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNULElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDaEQsQ0FBQztRQUNELElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO1FBQ2pELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFDO1FBQzdCLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO0lBQzdCLENBQUM7SUFFRCxzQkFBVyxnQ0FBSzthQUFoQjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUNyRCxDQUFDOzs7T0FBQTtJQUVELHNCQUFXLGdDQUFLO2FBQWhCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdkIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVyxxQ0FBVTthQUFyQjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQzVCLENBQUM7OztPQUFBO0lBRUQsc0JBQVcseUNBQWM7YUFBekI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQztRQUNoQyxDQUFDOzs7T0FBQTtJQUVELHNCQUFXLDBDQUFlO2FBQTFCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUM7UUFDckMsQ0FBQzs7O09BQUE7SUFFTSxnQ0FBUSxHQUFmO1FBQ0ksSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2QsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFDTSxnQ0FBUSxHQUFmO1FBQ0ksSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFTSx1Q0FBZSxHQUF0QjtRQUNJLElBQU0sU0FBUyxHQUFnQjtZQUMzQixRQUFRLEVBQUUsMEJBQVksQ0FBQyxTQUFTO1lBQ2hDLFNBQVMsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUMxQixVQUFVLEVBQUUsSUFBSSxDQUFDLFdBQVc7WUFDNUIsY0FBYyxFQUFFLElBQUksQ0FBQyxlQUFlO1lBQ3BDLFVBQVUsRUFBRSxJQUFJLENBQUMsTUFBTTtZQUN2QixVQUFVLEVBQUUsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsTUFBTTtZQUM5QyxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU07U0FDckIsQ0FBQztRQUNGLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQXJGUSxhQUFhO1FBRHpCLGlCQUFVLEVBQUU7eUNBWXNCLDJDQUFtQjtZQUN6QiwrQkFBYTtPQVo3QixhQUFhLENBc0Z6QjtJQUFELG9CQUFDO0NBQUEsQUF0RkQsSUFzRkM7QUF0Rlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8vIFNlcnZpY2VzXG5pbXBvcnQgeyBGTVN0YXRpc3RpY3NTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZS9mbS1zdGF0aXN0aWNzLnNlcnZpY2UnO1xuaW1wb3J0IHsgRk1RdWl6U2VydmljZSB9IGZyb20gJy4vZm0tcXVpei5zZXJ2aWNlJztcblxuLy8gU3RhdGljcyAmIERvbWFpbnNcbmltcG9ydCB7IFF1aXpUeXBlRW51bSB9IGZyb20gJy4uL3NoYXJlZC9zdGF0aWMtZGF0YSc7XG5pbXBvcnQgeyBGaXNoTWVtb3J5RG9tYWluIH0gZnJvbSAnLi4vdHlwaW5nL2RvbWFpbnMnO1xuaW1wb3J0IEZNQ2FyZCA9IEZpc2hNZW1vcnlEb21haW4uRk1DYXJkO1xuaW1wb3J0IEZNUXVpeiA9IEZpc2hNZW1vcnlEb21haW4uRk1RdWl6O1xuaW1wb3J0IEZNU3RhdGlzdGljID0gRmlzaE1lbW9yeURvbWFpbi5GTVN0YXRpc3RpYztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRk1HYW1lU2VydmljZSB7XG5cbiAgICBwcml2YXRlIF9teVF1aXo6IEZNUXVpejtcbiAgICBwcml2YXRlIF9zY29yZTogbnVtYmVyO1xuICAgIHByaXZhdGUgX3RvdGFsUXVlc3Rpb25zOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfY3VycmVudFF1ZXN0aW9uOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfc3RhcnREYXRlOiBEYXRlO1xuICAgIHByaXZhdGUgX2ZpbmlzaERhdGU6IERhdGU7XG4gICAgcHJpdmF0ZSBfaXNGaW5pc2hlZDogYm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHN0YXRpc3RpY3NTZXJ2aWNlOiBGTVN0YXRpc3RpY3NTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHF1aXpTZXJ2aWNlOiBGTVF1aXpTZXJ2aWNlXG4gICAgKSB7XG4gICAgICAgIC8vIHRoaXMuX215UXVpeiA9IFtdO1xuICAgICAgICB0aGlzLl9zY29yZSA9IDA7XG4gICAgICAgIHRoaXMuX3RvdGFsUXVlc3Rpb25zID0gMDtcbiAgICAgICAgdGhpcy5fY3VycmVudFF1ZXN0aW9uID0gMDtcbiAgICAgICAgdGhpcy5fc3RhcnREYXRlID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLl9maW5pc2hEYXRlID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLl9pc0ZpbmlzaGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG5leHRDYXJkKCkge1xuICAgICAgICBpZiAodGhpcy5fY3VycmVudFF1ZXN0aW9uIDwgdGhpcy5fdG90YWxRdWVzdGlvbnMgLSAxKSB7XG4gICAgICAgICAgICB0aGlzLl9jdXJyZW50UXVlc3Rpb24rKztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2lzRmluaXNoZWQgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKCF0aGlzLl9maW5pc2hEYXRlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZmluaXNoRGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgbmV3UXVpeihpZDogbnVtYmVyID0gMCkge1xuICAgICAgICBpZiAoaWQgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLl9teVF1aXogPSB0aGlzLnF1aXpTZXJ2aWNlLmdldFF1aXooaWQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3Njb3JlID0gMDtcbiAgICAgICAgdGhpcy5fdG90YWxRdWVzdGlvbnMgPSB0aGlzLl9teVF1aXouY2FyZHMubGVuZ3RoO1xuICAgICAgICB0aGlzLl9jdXJyZW50UXVlc3Rpb24gPSAwO1xuICAgICAgICB0aGlzLl9zdGFydERhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICB0aGlzLl9maW5pc2hEYXRlID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLl9pc0ZpbmlzaGVkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBhQ2FyZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX215UXVpei5jYXJkc1t0aGlzLl9jdXJyZW50UXVlc3Rpb25dO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgc2NvcmUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zY29yZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGlzRmluaXNoZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc0ZpbmlzaGVkO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgdG90YWxRdWVzdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl90b3RhbFF1ZXN0aW9ucztcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGN1cnJlbnRRdWVzdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRRdWVzdGlvbiArIDE7XG4gICAgfVxuXG4gICAgcHVibGljIGdvdFJpZ2h0KCkge1xuICAgICAgICB0aGlzLl9zY29yZSsrO1xuICAgICAgICB0aGlzLm5leHRDYXJkKCk7XG4gICAgfVxuICAgIHB1YmxpYyBnb3RXcm9uZygpIHtcbiAgICAgICAgdGhpcy5uZXh0Q2FyZCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhZGRUb1N0YXRpc3RpY3MoKSB7XG4gICAgICAgIGNvbnN0IHN0YXRpc3RpYzogRk1TdGF0aXN0aWMgPSB7XG4gICAgICAgICAgICBxdWl6VHlwZTogUXVpelR5cGVFbnVtLkZsYXNoQ2FyZCxcbiAgICAgICAgICAgIHN0YXJ0RGF0ZTogdGhpcy5fc3RhcnREYXRlLFxuICAgICAgICAgICAgZmluaXNoRGF0ZTogdGhpcy5fZmluaXNoRGF0ZSxcbiAgICAgICAgICAgIHRvdGFsUXVlc3Rpb25zOiB0aGlzLl90b3RhbFF1ZXN0aW9ucyxcbiAgICAgICAgICAgIHRvdGFsUmlnaHQ6IHRoaXMuX3Njb3JlLFxuICAgICAgICAgICAgdG90YWxXcm9uZzogdGhpcy5fdG90YWxRdWVzdGlvbnMgLSB0aGlzLl9zY29yZSxcbiAgICAgICAgICAgIHNjb3JlOiB0aGlzLl9zY29yZVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnN0YXRpc3RpY3NTZXJ2aWNlLmFkZChzdGF0aXN0aWMpO1xuICAgIH1cbn0iXX0=