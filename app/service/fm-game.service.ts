import { Injectable } from '@angular/core';

// Services
import { FMStatisticsService } from '../service/fm-statistics.service';
import { FMQuizService } from './fm-quiz.service';

// Statics & Domains
import { QuizTypeEnum } from '../shared/static-data';
import { FishMemoryDomain } from '../typing/domains';
import FMCard = FishMemoryDomain.FMCard;
import FMQuiz = FishMemoryDomain.FMQuiz;
import FMStatistic = FishMemoryDomain.FMStatistic;


@Injectable()
export class FMGameService {

    private _myQuiz: FMQuiz;
    private _score: number;
    private _totalQuestions: number;
    private _currentQuestion: number;
    private _startDate: Date;
    private _finishDate: Date;
    private _isFinished: boolean;

    constructor(
        private statisticsService: FMStatisticsService,
        private quizService: FMQuizService
    ) {
        // this._myQuiz = [];
        this._score = 0;
        this._totalQuestions = 0;
        this._currentQuestion = 0;
        this._startDate = undefined;
        this._finishDate = undefined;
        this._isFinished = true;
    }

    private nextCard() {
        if (this._currentQuestion < this._totalQuestions - 1) {
            this._currentQuestion++;
        } else {
            this._isFinished = true;
            if (!this._finishDate) {
                this._finishDate = new Date();
            }
        }
    }

    public newQuiz(id: number = 0) {
        if (id > 0) {
            this._myQuiz = this.quizService.getQuiz(id);
        }
        this._score = 0;
        this._totalQuestions = this._myQuiz.cards.length;
        this._currentQuestion = 0;
        this._startDate = new Date();
        this._finishDate = undefined;
        this._isFinished = false;
    }

    public get aCard() {
        return this._myQuiz.cards[this._currentQuestion];
    }

    public get score() {
        return this._score;
    }

    public get isFinished() {
        return this._isFinished;
    }

    public get totalQuestions() {
        return this._totalQuestions;
    }

    public get currentQuestion() {
        return this._currentQuestion + 1;
    }

    public gotRight() {
        this._score++;
        this.nextCard();
    }
    public gotWrong() {
        this.nextCard();
    }

    public addToStatistics() {
        const statistic: FMStatistic = {
            quizType: QuizTypeEnum.FlashCard,
            startDate: this._startDate,
            finishDate: this._finishDate,
            totalQuestions: this._totalQuestions,
            totalRight: this._score,
            totalWrong: this._totalQuestions - this._score,
            score: this._score
        };
        this.statisticsService.add(statistic);
    }
}