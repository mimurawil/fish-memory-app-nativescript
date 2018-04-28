import { Component } from "@angular/core";
import { FMDatabaseService } from "./service/fm-database.service";
import { FMCardService } from "./service/fm-card.service";
import { FMQuizService } from "./service/fm-quiz.service";

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
})

export class AppComponent {

    constructor(
        private dbService: FMDatabaseService,
        private cardService: FMCardService,
        private quizService: FMQuizService
    ) { }
}
