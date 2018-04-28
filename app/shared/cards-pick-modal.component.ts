import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';

import { ModalDialogParams } from 'nativescript-angular/modal-dialog';

// Telerik Components
import { RadListViewComponent } from 'nativescript-ui-listview/angular';
import { ListViewEventData } from 'nativescript-ui-listview';
import { FMCardService } from '../service/fm-card.service';

@Component({
    moduleId: module.id,
    selector: 'cards-pick-modal',
    templateUrl: 'cards-pick-modal.component.html',
    styleUrls: ['cards-pick-modal.component.css']
})

export class FMCardsPickModalComponent implements OnInit, OnDestroy {

    @ViewChild('myListView') listViewComponent: RadListViewComponent;
    public showFront: boolean;
    public selectedItems: boolean[];

    constructor(
        private params: ModalDialogParams,
        private cardService: FMCardService
    ) {
        this.showFront = true;
        this.cardService.filter({ without: params.context.alreadySelected });
    }

    // Lifecycle
    ngOnInit() {
        this.selectedItems = new Array(this.cardService.getCards().length).fill(false);
    }

    ngOnDestroy() {
        this.cardService.clearFilter();
    }

    //Auxiliary
    public get dataItems() {
        return this.cardService.getCards();
    }

    // Event Listeners
    public onConfirmTapped() {
        this.params.closeCallback(this.listViewComponent.listView.getSelectedItems());
    }

    public onSetAllItemsFront() {
        this.showFront = true;
    }

    public onSetAllItemsBack() {
        this.showFront = false;
    }

    public onItemSelected(args: ListViewEventData) {
        this.selectedItems[args.index] = true;
    }

    public onItemDeselected(args: ListViewEventData) {
        this.selectedItems[args.index] = false;
    }


}