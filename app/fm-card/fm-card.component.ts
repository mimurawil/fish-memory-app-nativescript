import { Component, OnInit, Input } from '@angular/core';

// Statics & Domains
import { FishMemoryDomain } from '../typing/domains';
import FMCard = FishMemoryDomain.FMCard;

@Component({
    moduleId: module.id,
    selector: 'fm-card',
    templateUrl: 'fm-card.component.html',
    styleUrls: ['fm-card.component.css']
})

export class FMCardComponent implements OnInit {

    @Input() myCard: FMCard;
    @Input() isFront: boolean;
    public flip: boolean = false;
    private isFlipping: boolean = true;

    constructor() { }

    ngOnInit() {
        this.isFront = true;
    }

    // Auxiliary
    public get cardText(): string {
        return this.isFront ? this.myCard.frontText : this.myCard.backText;
    }

    private flipAnimation() {
        this.flip = true;
        this.isFlipping = true;
        setTimeout(() => {
            this.flip = false;
            this.isFlipping = false;
        }, 750);
    }

    // Event Listeners
    public onCardTapped() {
        this.flipAnimation();
        setTimeout(() => {
            if (this.isFlipping) {
                this.isFront = !this.isFront;
                this.isFlipping = false;
            }
        }, 250);
    }

}