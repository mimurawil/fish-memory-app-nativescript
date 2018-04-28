import { Component, OnInit, ViewChild } from '@angular/core';
import { View } from 'tns-core-modules/ui/core/view';
import { RouterExtensions } from 'nativescript-angular/router';
import { ConfirmOptions, confirm } from 'ui/dialogs'

// Telerik Components
import { RadSideDrawerComponent } from 'nativescript-ui-sidedrawer/angular';
import { RadListViewComponent } from 'nativescript-ui-listview/angular';
import { ListViewEventData } from 'nativescript-ui-listview';

// Services
import { FMCardService } from '../service/fm-card.service';

// Statics & Domains
import { CurrentScreenEnum } from '../shared/static-data';

@Component({
    moduleId: module.id,
    selector: 'fm-card-list',
    templateUrl: 'fm-card-list.component.html',
    styleUrls: ['fm-card-list.component.css']
})

export class FMCardListComponent implements OnInit {

    @ViewChild(RadSideDrawerComponent) drawerComponent: RadSideDrawerComponent;
    @ViewChild('myListView') listViewComponent: RadListViewComponent;
    public showFront: boolean[];
    public allItemsFront: boolean;
    public CURRENT_SCREEN: CurrentScreenEnum = CurrentScreenEnum.CardsList;

    constructor(
        private cardService: FMCardService,
        private routerExtensions: RouterExtensions
    ) {
        this.allItemsFront = true;
    }

    ngOnInit() {
        this.cardService.clearFilter();
        this.showFront = new Array(this.cardService.getCards().length).fill(true);
    }

    // Auxiliary
    public get dataItems() {
        return this.cardService.getCards();
    }

    // Event Listeners
    public onAddCardTapped() {
        this.routerExtensions.navigate(['/cards/new']);
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

    public onLeftSwipeClick(args: ListViewEventData) {
        const index = this.listViewComponent.listView.items.indexOf(args.object.bindingContext);
        const id = this.cardService.getCards()[index].id;
        this.routerExtensions.navigate(['/cards/', id]);
    }

    public onRightSwipeClick(args: ListViewEventData) {
        let options: ConfirmOptions = {
            title: 'Delete Card',
            message: 'Are you sure you want to delete this card?\nThis operation cannot be undone.',
            okButtonText: 'Delete',
            cancelButtonText: 'Cancel'
        };
        confirm(options).then(yes => {
            if (yes) {
                const index = this.listViewComponent.listView.items.indexOf(args.object.bindingContext);
                const id = this.cardService.getCards()[index].id;
                this.cardService.deleteCard(id).subscribe(success => { });
            }
        });
    }

    public onItemSelected(args: ListViewEventData) {
        this.showFront[args.index] = !this.showFront[args.index];
    }

    public onItemDeselected(args: ListViewEventData) {
        this.showFront[args.index] = !this.showFront[args.index];
    }

    public onSetAllItemsFront() {
        this.showFront = new Array(this.cardService.getCards().length).fill(true);
        this.allItemsFront = true;
    }

    public onSetAllItemsBack() {
        this.showFront = new Array(this.cardService.getCards().length).fill(false);
        this.allItemsFront = false;
    }

}