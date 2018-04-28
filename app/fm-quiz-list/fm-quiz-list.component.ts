import { Component, OnInit, ViewChild } from '@angular/core';
import { View } from 'tns-core-modules/ui/core/view';
import { RouterExtensions } from 'nativescript-angular/router';
import { ConfirmOptions, confirm } from 'ui/dialogs';

// Telerik
import { RadSideDrawerComponent } from 'nativescript-ui-sidedrawer/angular';
import { RadListViewComponent } from 'nativescript-ui-listview/angular';
import { ListViewEventData } from 'nativescript-ui-listview';

// Statics & Domains
import { CurrentScreenEnum } from '../shared/static-data';
import { FishMemoryDomain } from '../typing/domains';
import FMQuizListItem = FishMemoryDomain.FMQuizListItem;

// Services
import { FMQuizService } from '../service/fm-quiz.service';

@Component({
    moduleId: module.id,
    selector: 'fm-quiz-list',
    templateUrl: 'fm-quiz-list.component.html'
})

export class FMQuizListComponent implements OnInit {

    @ViewChild('myDrawer') drawerComponent: RadSideDrawerComponent;
    @ViewChild('myListView') listViewComponent: RadListViewComponent;

    private _isSelectingToPlay: boolean;

    public CURRENT_SCREEN = CurrentScreenEnum.QuizList;

    constructor(
        private quizService: FMQuizService,
        private routerExtensions: RouterExtensions,
    ) { }

    ngOnInit() {
        this.quizService.clearFilter();

        let paths: string[] = this.routerExtensions.router.url.substr(1).split('/');
        if (paths[paths.length - 1] === 'select-play') {
            this._isSelectingToPlay = true;
        } else {
            this._isSelectingToPlay = false;
        }
    }

    // Auxiliary
    public get dataItems(): FMQuizListItem[] {
        return this.quizService.getQuizzes();
    }

    public get play(): boolean {
        return this._isSelectingToPlay;
    }

    // Event Listeners
    public goBack() {
        this.routerExtensions.backToPreviousPage();
    }

    public onAddQuizTapped() {
        this.routerExtensions.navigate(['/quizzes/new']);
    }

    public onToggleDrawer() {
        this.drawerComponent.sideDrawer.toggleDrawerState();
    }

    public onSwipeCellStarted(args: ListViewEventData) {
        var swipeLimits = args.data.swipeLimits;
        var swipeView = args['object'];
        var leftItem = swipeView.getViewById<View>('left-view');
        var rightItem = swipeView.getViewById<View>('right-view');
        swipeLimits.left = leftItem.getMeasuredWidth();
        swipeLimits.right = rightItem.getMeasuredWidth();
        swipeLimits.threshold = leftItem.getMeasuredWidth() / 2;
    }

    public onItemSelected(args: ListViewEventData) {
        if (this._isSelectingToPlay) {
            const id = this.quizService.getQuizzes()[args.index].id;
            this.routerExtensions.navigate(['/play/quiz/', id]);
        }
    }

    public onLeftSwipeClick(args: ListViewEventData) {
        const index = this.listViewComponent.listView.items.indexOf(args.object.bindingContext);
        const id = this.quizService.getQuizzes()[index].id;
        this.routerExtensions.navigate(['/quizzes/', id]);
    }

    public onRightSwipeClick(args: ListViewEventData) {
        let options: ConfirmOptions = {
            title: 'Delete Quiz',
            message: 'Are you sure you want to delete this quiz?\nThis operation cannot be undone.',
            okButtonText: 'Delete',
            cancelButtonText: 'Cancel'
        };
        confirm(options).then(yes => {
            if (yes) {
                const index = this.listViewComponent.listView.items.indexOf(args.object.bindingContext);
                const id = this.quizService.getQuizzes()[index].id;
                this.quizService.deleteQuiz(id).subscribe(success => { });
            }
        });
    }
}