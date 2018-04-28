import { Component, OnInit, Input } from '@angular/core';

import { CurrentScreenEnum } from './static-data';
import { FMGameService } from '../service/fm-game.service';

@Component({
    moduleId: module.id,
    selector: 'default-nav-menu',
    templateUrl: 'default-nav-menu.component.html',
    styleUrls: ['default-nav-menu.component.css']
})

export class DefaultNavMenuComponent implements OnInit {

    @Input() currentScreen: CurrentScreenEnum;
    public CARDS_LIST = CurrentScreenEnum.CardsList;
    public PLAY_QUIZ = CurrentScreenEnum.PlayQuiz;
    public EDIT_CARD = CurrentScreenEnum.EditCard;
    public QUIZ_LIST = CurrentScreenEnum.QuizList;
    public EDIT_QUIZ = CurrentScreenEnum.EditQuiz;

    constructor(
        private gameService: FMGameService
    ) { }

    ngOnInit() { }

    public get isGameRunning() {
        return !this.gameService.isFinished;
    }

}