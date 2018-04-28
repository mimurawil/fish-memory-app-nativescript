import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpModule } from "nativescript-angular/http";

// App Modules
import { FMGameQuizModule } from "./fm-game-quiz/fm-game-quiz.module";
import { FMCardListModule } from "./fm-card-list/fm-card-list.module";
import { FMQuizListModule } from "./fm-quiz-list/fm-quiz-list.module";

// Services
import { FMDatabaseService } from "./service/fm-database.service";
import { FMCardService } from "./service/fm-card.service";
import { FMQuizService } from "./service/fm-quiz.service";

// Component
import { FMAboutComponent } from "./fm-about/fm-about.component";


@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        FMGameQuizModule,
        FMCardListModule,
        FMQuizListModule
    ],
    declarations: [
        AppComponent,
        FMAboutComponent
    ],
    providers: [
        FMDatabaseService,
        FMCardService,
        FMQuizService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
