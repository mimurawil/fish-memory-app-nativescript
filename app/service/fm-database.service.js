"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
// SQLite
var SQLite = require('nativescript-sqlite');
// Statics & Domains
var static_data_1 = require("../shared/static-data");
var FMDatabaseService = /** @class */ (function () {
    function FMDatabaseService() {
        var _this = this;
        this.DBNAME = 'FishMemoryDB.db';
        this.CARD_TABLE = 'card_table';
        this.QUIZ_TABLE = 'quiz_table';
        this.QUIZ_ITEM_TABLE = 'quiz_item_table';
        // SQLite.copyDatabase(this.DBNAME);
        if (!SQLite.exists(this.DBNAME)) {
            SQLite.copyDatabase(this.DBNAME);
        }
        new SQLite(this.DBNAME, function (err, db) {
            if (!err) {
                _this._db = db;
                _this._db.resultType(SQLite.RESULTSASOBJECT);
            }
        });
    }
    // Lists card_table
    FMDatabaseService.prototype.getAllCards = function () {
        var sql = "SELECT " + static_data_1.CardTable.ID + ", " + static_data_1.CardTable.FRONT_TEXT + ", " + static_data_1.CardTable.BACK_TEXT + "\n               FROM " + this.CARD_TABLE;
        return this._db.all(sql);
    };
    // Inserts card_table. Returns id
    FMDatabaseService.prototype.insertNewCard = function (card) {
        var sql = "INSERT INTO " + this.CARD_TABLE + "\n                        (" + static_data_1.CardTable.FRONT_TEXT + "\n                        ," + static_data_1.CardTable.BACK_TEXT + ")\n                    VALUES (?\n                           ,?)";
        return this._db.execSQL(sql, [card.frontText, card.backText]);
    };
    // Updates card_table. Returns quantity of updated row(s)
    FMDatabaseService.prototype.updateCard = function (card) {
        var sql = "UPDATE " + this.CARD_TABLE + " \n                SET " + static_data_1.CardTable.FRONT_TEXT + " = ?\n                   ," + static_data_1.CardTable.BACK_TEXT + " = ?\n              WHERE " + static_data_1.CardTable.ID + " = ?";
        return this._db.execSQL(sql, [card.frontText, card.backText, card.id]);
    };
    // Deletes card_table. Returns quantity of deleted row(s)
    FMDatabaseService.prototype.deleteCard = function (id) {
        var sql = "DELETE FROM " + this.CARD_TABLE + " WHERE " + static_data_1.CardTable.ID + " = ?";
        return this._db.execSQL(sql, [id]);
    };
    // Lists quiz_table
    FMDatabaseService.prototype.getAllQuizzesWithItems = function () {
        var sql = "SELECT qt." + static_data_1.QuizTable.ID + "\n                      , qt." + static_data_1.QuizTable.TITLE + "\n                      , qit." + static_data_1.QuizItemTable.ITEM_TYPE + "\n                      , qit." + static_data_1.QuizItemTable.ITEM_ID + "\n                   FROM " + this.QUIZ_TABLE + " qt\n                  INNER JOIN " + this.QUIZ_ITEM_TABLE + " qit ON (qt." + static_data_1.QuizTable.ID + " = qit." + static_data_1.QuizItemTable.QUIZ_ID + ")";
        return this._db.all(sql);
    };
    // Inserts quiz_table. Returns id
    FMDatabaseService.prototype.insertNewQuiz = function (quiz) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var sqlQuiz = "INSERT INTO " + _this.QUIZ_TABLE + " (" + static_data_1.QuizTable.TITLE + ")\n                        VALUES (?)";
            _this._db.execSQL(sqlQuiz, [quiz.title]).then(function (id) {
                quiz.id = id;
                _this.insertNewQuizItem(quiz).then(function (result) {
                    resolve(id);
                }, function (err) { reject(err); });
            }, function (err) { reject(err); });
        });
    };
    // Inserts multiple quiz_item_table. Returns array of ids
    FMDatabaseService.prototype.insertNewQuizItem = function (quiz) {
        if (quiz.cards.length < 1) {
            return Promise.resolve([]);
        }
        var sqlQuizItem = "INSERT INTO " + this.QUIZ_ITEM_TABLE + " \n                        (" + static_data_1.QuizItemTable.QUIZ_ID + "\n                        , " + static_data_1.QuizItemTable.ITEM_TYPE + "\n                        , " + static_data_1.QuizItemTable.ITEM_ID + ")\n                    VALUES ";
        quiz.cards.forEach(function (card) {
            sqlQuizItem += "(" + quiz.id + ", \"" + static_data_1.QuizItemType.CARD + "\", " + card.id + "),";
        });
        sqlQuizItem = sqlQuizItem.slice(0, -1);
        return this._db.execSQL(sqlQuizItem);
    };
    // Updates title of quiz_table. Returns quantity of updated row(s) (just 1 if success)
    FMDatabaseService.prototype.updateQuiz = function (id, title) {
        var sql = "UPDATE " + this.QUIZ_TABLE + "\n                SET " + static_data_1.QuizTable.TITLE + " = ?\n              WHERE " + static_data_1.QuizTable.ID + " = ?";
        return this._db.execSQL(sql, title, id);
    };
    // Deletes quiz_table. Returns quantity of deleted row(s)
    FMDatabaseService.prototype.deleteQuiz = function (id) {
        var sql = "DELETE FROM " + this.QUIZ_TABLE + " WHERE " + static_data_1.QuizTable.ID + " = ?";
        return this._db.execSQL(sql, [id]);
    };
    // Deletes quiz_item_table by quiz_id. Returns quantity of deleted row(s)
    FMDatabaseService.prototype.deleteQuizItemByQuizId = function (quizId) {
        var sql = "DELETE FROM " + this.QUIZ_ITEM_TABLE + " WHERE " + static_data_1.QuizItemTable.QUIZ_ID + " = ?";
        return this._db.execSQL(sql, [quizId]);
    };
    FMDatabaseService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], FMDatabaseService);
    return FMDatabaseService;
}());
exports.FMDatabaseService = FMDatabaseService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm0tZGF0YWJhc2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZtLWRhdGFiYXNlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFFM0MsU0FBUztBQUNULElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0FBRTVDLG9CQUFvQjtBQUNwQixxREFBMEY7QUFNMUY7SUFTSTtRQUFBLGlCQVdDO1FBakJPLFdBQU0sR0FBRyxpQkFBaUIsQ0FBQztRQUUzQixlQUFVLEdBQUcsWUFBWSxDQUFDO1FBQzFCLGVBQVUsR0FBRyxZQUFZLENBQUM7UUFDMUIsb0JBQWUsR0FBRyxpQkFBaUIsQ0FBQztRQUd4QyxvQ0FBb0M7UUFDcEMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDOUIsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDckMsQ0FBQztRQUNELElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsVUFBQyxHQUFHLEVBQUUsRUFBRTtZQUM1QixFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ1AsS0FBSSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUM7Z0JBQ2QsS0FBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQ2hELENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxtQkFBbUI7SUFDWix1Q0FBVyxHQUFsQjtRQUNJLElBQU0sR0FBRyxHQUNMLFlBQVUsdUJBQVMsQ0FBQyxFQUFFLFVBQUssdUJBQVMsQ0FBQyxVQUFVLFVBQUssdUJBQVMsQ0FBQyxTQUFTLDhCQUM3RCxJQUFJLENBQUMsVUFBWSxDQUFDO1FBQ2hDLE1BQU0s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RyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCx5RUFBeUU7SUFDbEUsa0RBQXNCLEdBQTdCLFVBQThCLE1BQWM7UUFDeEMsSUFBTSxHQUFHLEdBQ0wsaUJBQWUsSUFBSSxDQUFDLGVBQWUsZUFBVSwyQkFBYSxDQUFDLE9BQU8sU0FBTSxDQUFDO1FBQzdFLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUEvSFEsaUJBQWlCO1FBRDdCLGlCQUFVLEVBQUU7O09BQ0EsaUJBQWlCLENBZ0k3QjtJQUFELHdCQUFDO0NBQUEsQUFoSUQsSUFnSUM7QUFoSVksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vLyBTUUxpdGVcbmxldCBTUUxpdGUgPSByZXF1aXJlKCduYXRpdmVzY3JpcHQtc3FsaXRlJyk7XG5cbi8vIFN0YXRpY3MgJiBEb21haW5zXG5pbXBvcnQgeyBDYXJkVGFibGUsIFF1aXpUYWJsZSwgUXVpekl0ZW1UYWJsZSwgUXVpekl0ZW1UeXBlIH0gZnJvbSAnLi4vc2hhcmVkL3N0YXRpYy1kYXRhJztcbmltcG9ydCB7IEZpc2hNZW1vcnlEb21haW4gfSBmcm9tICcuLi90eXBpbmcvZG9tYWlucyc7XG5pbXBvcnQgRk1DYXJkID0gRmlzaE1lbW9yeURvbWFpbi5GTUNhcmQ7XG5pbXBvcnQgRk1RdWl6ID0gRmlzaE1lbW9yeURvbWFpbi5GTVF1aXo7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGTURhdGFiYXNlU2VydmljZSB7XG5cbiAgICBwcml2YXRlIF9kYjogYW55O1xuICAgIHByaXZhdGUgREJOQU1FID0gJ0Zpc2hNZW1vcnlEQi5kYic7XG5cbiAgICBwcml2YXRlIENBUkRfVEFCTEUgPSAnY2FyZF90YWJsZSc7XG4gICAgcHJpdmF0ZSBRVUlaX1RBQkxFID0gJ3F1aXpfdGFibGUnO1xuICAgIHByaXZhdGUgUVVJWl9JVEVNX1RBQkxFID0gJ3F1aXpfaXRlbV90YWJsZSc7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgLy8gU1FMaXRlLmNvcHlEYXRhYmFzZSh0aGlzLkRCTkFNRSk7XG4gICAgICAgIGlmICghU1FMaXRlLmV4aXN0cyh0aGlzLkRCTkFNRSkpIHtcbiAgICAgICAgICAgIFNRTGl0ZS5jb3B5RGF0YWJhc2UodGhpcy5EQk5BTUUpO1xuICAgICAgICB9XG4gICAgICAgIG5ldyBTUUxpdGUodGhpcy5EQk5BTUUsIChlcnIsIGRiKSA9PiB7XG4gICAgICAgICAgICBpZiAoIWVycikge1xuICAgICAgICAgICAgICAgIHRoaXMuX2RiID0gZGI7XG4gICAgICAgICAgICAgICAgdGhpcy5fZGIucmVzdWx0VHlwZShTUUxpdGUuUkVTVUxUU0FTT0JKRUNUKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gTGlzdHMgY2FyZF90YWJsZVxuICAgIHB1YmxpYyBnZXRBbGxDYXJkcygpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICBjb25zdCBzcWw6IHN0cmluZyA9XG4gICAgICAgICAgICBgU0VMRUNUICR7Q2FyZFRhYmxlLklEfSwgJHtDYXJkVGFibGUuRlJPTlRfVEVYVH0sICR7Q2FyZFRhYmxlLkJBQ0tfVEVYVH1cbiAgICAgICAgICAgICAgIEZST00gJHt0aGlzLkNBUkRfVEFCTEV9YDtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RiLmFsbChzcWwpO1xuICAgIH1cblxuICAgIC8vIEluc2VydHMgY2FyZF90YWJsZS4gUmV0dXJucyBpZFxuICAgIHB1YmxpYyBpbnNlcnROZXdDYXJkKGNhcmQ6IEZNQ2FyZCk6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgICAgIGNvbnN0IHNxbDogc3RyaW5nID1cbiAgICAgICAgICAgIGBJTlNFUlQgSU5UTyAke3RoaXMuQ0FSRF9UQUJMRX1cbiAgICAgICAgICAgICAgICAgICAgICAgICgke0NhcmRUYWJsZS5GUk9OVF9URVhUfVxuICAgICAgICAgICAgICAgICAgICAgICAgLCR7Q2FyZFRhYmxlLkJBQ0tfVEVYVH0pXG4gICAgICAgICAgICAgICAgICAgIFZBTFVFUyAoP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgLD8pYDtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RiLmV4ZWNTUUwoc3FsLCBbY2FyZC5mcm9udFRleHQsIGNhcmQuYmFja1RleHRdKTtcbiAgICB9XG5cbiAgICAvLyBVcGRhdGVzIGNhcmRfdGFibGUuIFJldHVybnMgcXVhbnRpdHkgb2YgdXBkYXRlZCByb3cocylcbiAgICBwdWJsaWMgdXBkYXRlQ2FyZChjYXJkOiBGTUNhcmQpOiBQcm9taXNlPG51bWJlcj4ge1xuICAgICAgICBjb25zdCBzcWw6IHN0cmluZyA9XG4gICAgICAgICAgICBgVVBEQVRFICR7dGhpcy5DQVJEX1RBQkxFfSBcbiAgICAgICAgICAgICAgICBTRVQgJHtDYXJkVGFibGUuRlJPTlRfVEVYVH0gPSA/XG4gICAgICAgICAgICAgICAgICAgLCR7Q2FyZFRhYmxlLkJBQ0tfVEVYVH0gPSA/XG4gICAgICAgICAgICAgIFdIRVJFICR7Q2FyZFRhYmxlLklEfSA9ID9gO1xuICAgICAgICByZXR1cm4gdGhpcy5fZGIuZXhlY1NRTChzcWwsIFtjYXJkLmZyb250VGV4dCwgY2FyZC5iYWNrVGV4dCwgY2FyZC5pZF0pO1xuICAgIH1cblxuICAgIC8vIERlbGV0ZXMgY2FyZF90YWJsZS4gUmV0dXJucyBxdWFudGl0eSBvZiBkZWxldGVkIHJvdyhzKVxuICAgIHB1YmxpYyBkZWxldGVDYXJkKGlkOiBudW1iZXIpOiBQcm9taXNlPG51bWJlcj4ge1xuICAgICAgICBjb25zdCBzcWw6IHN0cmluZyA9XG4gICAgICAgICAgICBgREVMRVRFIEZST00gJHt0aGlzLkNBUkRfVEFCTEV9IFdIRVJFICR7Q2FyZFRhYmxlLklEfSA9ID9gO1xuICAgICAgICByZXR1cm4gdGhpcy5fZGIuZXhlY1NRTChzcWwsIFtpZF0pO1xuICAgIH1cblxuICAgIC8vIExpc3RzIHF1aXpfdGFibGVcbiAgICBwdWJsaWMgZ2V0QWxsUXVpenplc1dpdGhJdGVtcygpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICBjb25zdCBzcWw6IHN0cmluZyA9XG4gICAgICAgICAgICBgU0VMRUNUIHF0LiR7UXVpelRhYmxlLklEfVxuICAgICAgICAgICAgICAgICAgICAgICwgcXQuJHtRdWl6VGFibGUuVElUTEV9XG4gICAgICAgICAgICAgICAgICAgICAgLCBxaXQuJHtRdWl6SXRlbVRhYmxlLklURU1fVFlQRX1cbiAgICAgICAgICAgICAgICAgICAgICAsIHFpdC4ke1F1aXpJdGVtVGFibGUuSVRFTV9JRH1cbiAgICAgICAgICAgICAgICAgICBGUk9NICR7dGhpcy5RVUlaX1RBQkxFfSBxdFxuICAgICAgICAgICAgICAgICAgSU5ORVIgSk9JTiAke3RoaXMuUVVJWl9JVEVNX1RBQkxFfSBxaXQgT04gKHF0LiR7UXVpelRhYmxlLklEfSA9IHFpdC4ke1F1aXpJdGVtVGFibGUuUVVJWl9JRH0pYDtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RiLmFsbChzcWwpO1xuICAgIH1cblxuICAgIC8vIEluc2VydHMgcXVpel90YWJsZS4gUmV0dXJucyBpZFxuICAgIHB1YmxpYyBpbnNlcnROZXdRdWl6KHF1aXo6IEZNUXVpeik6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzcWxRdWl6OiBzdHJpbmcgPVxuICAgICAgICAgICAgICAgIGBJTlNFUlQgSU5UTyAke3RoaXMuUVVJWl9UQUJMRX0gKCR7UXVpelRhYmxlLlRJVExFfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIFZBTFVFUyAoPylgO1xuICAgICAgICAgICAgdGhpcy5fZGIuZXhlY1NRTChzcWxRdWl6LCBbcXVpei50aXRsZV0pLnRoZW4oXG4gICAgICAgICAgICAgICAgaWQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBxdWl6LmlkID0gaWQ7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5zZXJ0TmV3UXVpekl0ZW0ocXVpeikudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShpZCk7XG4gICAgICAgICAgICAgICAgICAgIH0sIGVyciA9PiB7IHJlamVjdChlcnIpOyB9KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVyciA9PiB7IHJlamVjdChlcnIpOyB9XG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBJbnNlcnRzIG11bHRpcGxlIHF1aXpfaXRlbV90YWJsZS4gUmV0dXJucyBhcnJheSBvZiBpZHNcbiAgICBwdWJsaWMgaW5zZXJ0TmV3UXVpekl0ZW0ocXVpejogRk1RdWl6KTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgaWYgKHF1aXouY2FyZHMubGVuZ3RoIDwgMSkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShbXSk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHNxbFF1aXpJdGVtOiBzdHJpbmcgPVxuICAgICAgICAgICAgYElOU0VSVCBJTlRPICR7dGhpcy5RVUlaX0lURU1fVEFCTEV9IFxuICAgICAgICAgICAgICAgICAgICAgICAgKCR7UXVpekl0ZW1UYWJsZS5RVUlaX0lEfVxuICAgICAgICAgICAgICAgICAgICAgICAgLCAke1F1aXpJdGVtVGFibGUuSVRFTV9UWVBFfVxuICAgICAgICAgICAgICAgICAgICAgICAgLCAke1F1aXpJdGVtVGFibGUuSVRFTV9JRH0pXG4gICAgICAgICAgICAgICAgICAgIFZBTFVFUyBgO1xuICAgICAgICBxdWl6LmNhcmRzLmZvckVhY2goY2FyZCA9PiB7XG4gICAgICAgICAgICBzcWxRdWl6SXRlbSArPSBgKCR7cXVpei5pZH0sIFwiJHtRdWl6SXRlbVR5cGUuQ0FSRH1cIiwgJHtjYXJkLmlkfSksYDtcbiAgICAgICAgfSk7XG4gICAgICAgIHNxbFF1aXpJdGVtID0gc3FsUXVpekl0ZW0uc2xpY2UoMCwgLTEpO1xuICAgICAgICByZXR1cm4gdGhpcy5fZGIuZXhlY1NRTChzcWxRdWl6SXRlbSk7XG4gICAgfVxuXG4gICAgLy8gVXBkYXRlcyB0aXRsZSBvZiBxdWl6X3RhYmxlLiBSZXR1cm5zIHF1YW50aXR5IG9mIHVwZGF0ZWQgcm93KHMpIChqdXN0IDEgaWYgc3VjY2VzcylcbiAgICBwdWJsaWMgdXBkYXRlUXVpeihpZDogbnVtYmVyLCB0aXRsZTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgbGV0IHNxbDogc3RyaW5nID1cbiAgICAgICAgICAgIGBVUERBVEUgJHt0aGlzLlFVSVpfVEFCTEV9XG4gICAgICAgICAgICAgICAgU0VUICR7UXVpelRhYmxlLlRJVExFfSA9ID9cbiAgICAgICAgICAgICAgV0hFUkUgJHtRdWl6VGFibGUuSUR9ID0gP2A7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYi5leGVjU1FMKHNxbCwgdGl0bGUsIGlkKTtcbiAgICB9XG5cbiAgICAvLyBEZWxldGVzIHF1aXpfdGFibGUuIFJldHVybnMgcXVhbnRpdHkgb2YgZGVsZXRlZCByb3cocylcbiAgICBwdWJsaWMgZGVsZXRlUXVpeihpZDogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgY29uc3Qgc3FsOiBzdHJpbmcgPVxuICAgICAgICAgICAgYERFTEVURSBGUk9NICR7dGhpcy5RVUlaX1RBQkxFfSBXSEVSRSAke1F1aXpUYWJsZS5JRH0gPSA/YDtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RiLmV4ZWNTUUwoc3FsLCBbaWRdKTtcbiAgICB9XG5cbiAgICAvLyBEZWxldGVzIHF1aXpfaXRlbV90YWJsZSBieSBxdWl6X2lkLiBSZXR1cm5zIHF1YW50aXR5IG9mIGRlbGV0ZWQgcm93KHMpXG4gICAgcHVibGljIGRlbGV0ZVF1aXpJdGVtQnlRdWl6SWQocXVpeklkOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICBjb25zdCBzcWw6IHN0cmluZyA9XG4gICAgICAgICAgICBgREVMRVRFIEZST00gJHt0aGlzLlFVSVpfSVRFTV9UQUJMRX0gV0hFUkUgJHtRdWl6SXRlbVRhYmxlLlFVSVpfSUR9ID0gP2A7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYi5leGVjU1FMKHNxbCwgW3F1aXpJZF0pO1xuICAgIH1cbn0iXX0=