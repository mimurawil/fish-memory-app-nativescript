import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { ActivatedRoute } from '@angular/router';
import { ConfirmOptions, confirm } from 'ui/dialogs';

// Services
import { FMGameService } from '../service/fm-game.service';

// Toast Messages
import * as Toast from 'nativescript-toast';

@Component({
    moduleId: module.id,
    selector: 'fm-game-quiz',
    templateUrl: 'fm-game-quiz.component.html',
    styleUrls: ['fm-game-quiz.component.css']
})

export class FMGameQuizComponent implements OnInit {

    private _id: number;

    public next: boolean; // controlling ui

    constructor(
        private gameService: FMGameService,
        private routerExtensions: RouterExtensions,
        private activatedRoute: ActivatedRoute
    ) {
        this.next = false;
        activatedRoute.params.forEach(params => {
            this._id = +params['id'];
            if (this._id) {
                gameService.newQuiz(this._id);
            }
        });

    }

    ngOnInit() {
        this.nextCardAnimation();
    }

    // Auxiliary
    public get card() {
        return this.gameService.aCard;
    }

    public get quizEnded() {
        return this.gameService.isFinished;
    }

    public get currentScore() {
        return this.gameService.score;
    }

    public get totalScore() {
        return this.gameService.totalQuestions;
    }

    public get currentQuestion() {
        return this.gameService.currentQuestion;
    }

    private nextCardAnimation() {
        this.next = true;
        setTimeout(() => {
            this.next = false;
        }, 500);
    }

    private addToStatistics() {
        let options: ConfirmOptions = {
            title: 'Quiz Ended',
            // message: `Your score is ${this.gameService.score} of ${this.gameService.totalQuestions}.\nWould you like to add to your statistics?`,
            message: `Your score is ${this.gameService.score} of ${this.gameService.totalQuestions}.`,
            // okButtonText: 'Yes',
            // cancelButtonText: 'No'
            okButtonText: 'Okay'
        };
        confirm(options).then(yes => {
            if (yes) {
                // this.gameService.addToStatistics();
                // Toast.makeText('Score added to statistics.').show();
            }
        });
    }

    // Event Listeners
    public onExitQuizTapped() {
        this.routerExtensions.backToPreviousPage();
    }

    public onRestartQuizTapped() {
        this.gameService.newQuiz();
        this.nextCardAnimation();
    }

    public onWrongTapped() {
        this.gameService.gotWrong();
        if (!this.quizEnded) {
            this.nextCardAnimation();
        } else {
            this.addToStatistics();
        }
    }

    public onRightTapped() {
        this.gameService.gotRight();
        if (!this.quizEnded) {
            this.nextCardAnimation();
        } else {
            this.addToStatistics();
        }
    }

}