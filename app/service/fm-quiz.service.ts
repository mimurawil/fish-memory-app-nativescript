import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as _ from 'lodash';

// Services
import { FMCardService } from './fm-card.service';
import { FMDatabaseService } from './fm-database.service';

// Statics & Domains
import { QuizTable, QuizItemTable, QuizItemType } from '../shared/static-data';
import { FishMemoryDomain } from '../typing/domains';
import FMQuizListItem = FishMemoryDomain.FMQuizListItem;
import FMQuiz = FishMemoryDomain.FMQuiz;


@Injectable()
export class FMQuizService {

    private _myQuizzes: FMQuizListItem[];
    private _filteredQuizzes: FMQuizListItem[];
    private _isLoading: boolean;

    constructor(
        private cardService: FMCardService,
        private dbService: FMDatabaseService
    ) {
        this._myQuizzes = [];
        this.clearFilter();
        this.fetchQuizzes().subscribe(success => this._isLoading = false);
    }

    private fetchQuizzes(): Observable<boolean> {
        this._isLoading = true;
        return Observable.create(observer => {
            this.dbService.getAllQuizzesWithItems().then(rows => {
                this._myQuizzes = [];
                let quiz: FMQuizListItem = { id: -1, title: '', cardIds: [] };
                let first: boolean = true;
                let lastId: number = -1;
                rows.forEach(row => {
                    if (lastId !== row[QuizTable.ID] && !first) {
                        this._myQuizzes.push(quiz);
                        quiz = { id: -1, title: '', cardIds: [] };
                    }
                    lastId = row[QuizTable.ID];
                    first = false;

                    quiz.id = row[QuizTable.ID];
                    quiz.title = row[QuizTable.TITLE];

                    if (row[QuizItemTable.ITEM_TYPE] === QuizItemType.CARD) {
                        quiz.cardIds.push(row[QuizItemTable.ITEM_ID]);
                    }
                });
                if (!first) {
                    this._myQuizzes.push(quiz);
                }
                observer.next(true);
                observer.complete();
            });
        });
    }

    private parseFMQuizListItem(fmQuiz: FMQuiz): FMQuizListItem {
        let q: FMQuizListItem = {
            id: fmQuiz.id,
            title: fmQuiz.title,
            cardIds: []
        };
        fmQuiz.cards.forEach(card => q.cardIds.push(card.id));
        return q;
    }

    public clearFilter() {
        this._filteredQuizzes = this._myQuizzes;
    }

    public getQuizzes(): FMQuizListItem[] {
        return this._filteredQuizzes;
    }

    public getQuiz(id: number): FMQuiz {
        let quizListItem = _.find(this._myQuizzes, quiz => quiz.id === id);
        let result: FMQuiz = {
            id: quizListItem.id,
            title: quizListItem.title,
            cards: []
        };
        quizListItem.cardIds.forEach(id => {
            result.cards.push(this.cardService.getCard(id));
        });
        return result;
    }

    public addQuiz(quiz: FMQuiz): Observable<boolean> {
        return Observable.create(observer => {
            this.dbService.insertNewQuiz(quiz).then(id => {
                quiz.id = id;
                this._myQuizzes.push(this.parseFMQuizListItem(quiz));
                observer.next(true);
                observer.complete();
            });
        });
    }

    public updateQuiz(quiz: FMQuiz): Observable<boolean> {
        return Observable.create(observer => {
            this.dbService.updateQuiz(quiz.id, quiz.title).then(countQuiz => {
                this.dbService.deleteQuizItemByQuizId(quiz.id).then(deleteCount => {
                    this.dbService.insertNewQuizItem(quiz).then(countQuizItem => {
                        _.remove(this._myQuizzes, quizItem => quizItem.id === quiz.id);
                        this._myQuizzes.push(this.parseFMQuizListItem(quiz));
                        observer.next(true);
                        observer.complete();
                    });
                });
            });
        });
    }

    public deleteQuiz(id: number): Observable<boolean> {
        return Observable.create(observer => {
            this.dbService.deleteQuiz(id).then(quizCount => {
                this.dbService.deleteQuizItemByQuizId(id).then(quizItemCount => {
                    _.remove(this._myQuizzes, quiz => quiz.id === id);
                    observer.next(true);
                    observer.complete();
                });
            });
        });
    }
}