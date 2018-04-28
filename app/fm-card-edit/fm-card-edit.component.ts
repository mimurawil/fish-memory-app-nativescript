import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular/router';
import * as Toast from 'nativescript-toast';

// Services
import { FMCardService } from '../service/fm-card.service';

// Statics & Domains
import { FishMemoryDomain } from '../typing/domains';
import FMCard = FishMemoryDomain.FMCard;

@Component({
    moduleId: module.id,
    selector: 'fm-card-edit',
    templateUrl: 'fm-card-edit.component.html',
    styleUrls: ['fm-card-edit.component.css']
})

export class FMCardEditComponent implements OnInit {

    public isNewCard: boolean;
    public frontText: string;
    public backText: string;

    private _id: number;

    constructor(
        private activatedRoute: ActivatedRoute,
        private routerExtensions: RouterExtensions,
        private cardService: FMCardService
    ) {
        this.isNewCard = true;
        this.frontText = '';
        this.backText = '';
        activatedRoute.params.forEach(params => {
            this._id = +params['id'];
            if (this._id) {
                this.isNewCard = false;
                let card = this.cardService.getCard(this._id);
                this.frontText = card.frontText || '';
                this.backText = card.backText || '';
            }
        });
    }

    ngOnInit() { }

    // Auxiliary
    public get isSafeToSave(): boolean {
        if (this.frontText.trim() === '') return false;
        if (this.backText.trim() === '') return false;

        return true;
    }

    // Event Listeners
    public goBack() {
        this.routerExtensions.backToPreviousPage();
    }

    public onSaveTapped() {
        const card: FMCard = {
            id: this._id,
            frontText: this.frontText,
            backText: this.backText
        };
        if (this.isNewCard) {
            this.cardService.addCard(card)
                .subscribe(
                    success => {
                        Toast.makeText('Card Created!').show();
                    }
                );
        } else {
            this.cardService.updateCard(card)
                .subscribe(
                    success => {
                        Toast.makeText('Card Updated!').show();
                    }
                );
        }
        this.routerExtensions.navigate(['/cards'], { clearHistory: true });
    }
}