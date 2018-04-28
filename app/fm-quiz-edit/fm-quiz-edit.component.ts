import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { View } from 'tns-core-modules/ui/core/view';
import { RouterExtensions } from 'nativescript-angular/router';
import { ActivatedRoute } from '@angular/router';

// Telerik Components
import { RadListViewComponent } from 'nativescript-ui-listview/angular';
import { ListViewEventData } from 'nativescript-ui-listview';

// Modal Dialog
import { ModalDialogService, ModalDialogOptions } from 'nativescript-angular/modal-dialog';
import { FMCardsPickModalComponent } from '../shared/cards-pick-modal.component';

// Services
import { FMQuizService } from '../service/fm-quiz.service';

// Statics & Domains
import { FishMemoryDomain } from '../typing/domains';
import FMQuiz = FishMemoryDomain.FMQuiz;
import FMCard = FishMemoryDomain.FMCard;


@Component({
    moduleId: module.id,
    selector: 'fm-quiz-edit',
    templateUrl: 'fm-quiz-edit.component.html',
    styleUrls: ['fm-quiz-edit.component.css']
})

export class FMQuizEditComponent implements OnInit {

    @ViewChild('myListView') listViewComponent: RadListViewComponent;

    private _id: number;

    public isNewQuiz: boolean;
    public myQuiz: FMQuiz;
    public showFront: boolean[];
    public isSaving: boolean;

    constructor(
        private routerExtensions: RouterExtensions,
        private activatedRoute: ActivatedRoute,
        private quizService: FMQuizService,
        private vcRef: ViewContainerRef,
        private modalService: ModalDialogService
    ) {
        this.isNewQuiz = true;
        this.myQuiz = { title: '', cards: [] };
        // title: 'aaa',
        // cards: [
        //     { frontText: 'a1', backText: 'b1' },
        //     { frontText: 'a2', backText: 'b2' },
        //     { frontText: 'a3', backText: 'b3' },
        // ]
        // };
        activatedRoute.params.forEach(params => {
            this._id = +params['id'];
            if (this._id) {
                this.isNewQuiz = false;
                this.myQuiz = this.quizService.getQuiz(this._id);
            }
        });
        this.showFront = new Array(this.myQuiz.cards.length).fill(true);
        this.isSaving = false;
    }

    ngOnInit() { }

    // Auxiliary
    public get isSafeToSave(): boolean {
        if (this.myQuiz.title.trim() === '') return false;

        if (this.myQuiz.cards.length < 1) return false;

        return true;
    }

    // Event Listeners
    public goBack() {
        this.routerExtensions.backToPreviousPage();
    }

    public onSwipeCellStarted(args: ListViewEventData) {
        var swipeLimits = args.data.swipeLimits;
        var swipeView = args['object'];
        // var leftItem = swipeView.getViewById<View>('left-view');
        var rightItem = swipeView.getViewById<View>('right-view');
        // swipeLimits.left = leftItem.getMeasuredWidth();
        swipeLimits.right = rightItem.getMeasuredWidth();
        // swipeLimits.threshold = leftItem.getMeasuredWidth() / 2;
        swipeLimits.threshold = rightItem.getMeasuredWidth() / 2;
    }

    public onRightSwipeClick(args: ListViewEventData) {
        const index = this.listViewComponent.listView.items.indexOf(args.object.bindingContext);
        this.myQuiz.cards.splice(index, 1);
    }

    public onItemSelected(args: ListViewEventData) {
        this.showFront[args.index] = !this.showFront[args.index];
    }

    public onAddCardTapped() {
        const options: ModalDialogOptions = {
            context: { alreadySelected: this.myQuiz.cards },
            fullscreen: true,
            viewContainerRef: this.vcRef
        };

        this.modalService.showModal(FMCardsPickModalComponent, options)
            .then(
                selects => {
                    if (selects) {
                        selects.forEach(item => {
                            this.myQuiz.cards.push(item);
                            this.showFront.push(true);
                        });
                    }
                }
            );
    }

    public onSaveTapped() {
        this.isSaving = true;
        if (this.isNewQuiz) {
            this.quizService.addQuiz(this.myQuiz)
                .subscribe(success => {
                    this.isSaving = false;
                    this.routerExtensions.backToPreviousPage();
                });
        } else {
            this.quizService.updateQuiz(this.myQuiz)
                .subscribe(success => {
                    this.isSaving = false;
                    this.routerExtensions.backToPreviousPage();
                });
        }
    }
}