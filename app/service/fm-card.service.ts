import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { Observable } from 'rxjs/Observable';

// Services
import { FMDatabaseService } from '../service/fm-database.service';

// Statics & Domains
import { CardTable } from '../shared/static-data';
import { FishMemoryDomain } from '../typing/domains';
import FMCard = FishMemoryDomain.FMCard;
import FMFilterOptions = FishMemoryDomain.FMFilterOptions;

@Injectable()
export class FMCardService {

    private _myCards: FMCard[];
    private _filteredCards: FMCard[];

    constructor(
        private dbService: FMDatabaseService
    ) {
        this._myCards = [];
        this._filteredCards = this._myCards;
        this.fetchCards().subscribe(success => { });
    }

    private fetchCards(): Observable<boolean> {
        return Observable.create(observer => {
            this.dbService.getAllCards()
                .then(result => {
                    this._myCards = [];
                    result.forEach(row => {
                        let card: FMCard = {
                            id: row[CardTable.ID],
                            frontText: row[CardTable.FRONT_TEXT],
                            backText: row[CardTable.BACK_TEXT]
                        };
                        this._myCards.push(card);
                    });
                    observer.next(true);
                    observer.complete();
                });
        });
    }

    public clearFilter() {
        this._filteredCards = this._myCards;
    }

    public filter(options: FMFilterOptions = {}) {
        if (options.without) {
            this._filteredCards = _.without(this._myCards, ...options.without);
        }
    }

    public getCards() {
        return this._filteredCards;
    }
    public getCard(id: number) {
        return _.find(this._myCards, myCard => myCard.id === id);
    }

    public addCard(card: FMCard): Observable<boolean> {
        return Observable.create(observer => {
            this.dbService.insertNewCard(card)
                .then(id => {
                    card.id = id;
                    this._myCards.push(card);
                    observer.next(true);
                    observer.complete();
                });
        });
    }

    public updateCard(card: FMCard): Observable<boolean> {
        return Observable.create(observer => {
            if (!card.id) {
                observer.next(false);
                observer.complete();
            } else {
                this.dbService.updateCard(card)
                    .then(count => {
                        let theCard: FMCard = _.find(this._myCards, myCard => myCard.id === card.id);
                        theCard.frontText = card.frontText;
                        theCard.backText = card.backText;
                        observer.next(true);
                        observer.complete();
                    });
            }
        });
    }

    public deleteCard(id: number): Observable<boolean> {
        return Observable.create(observer => {
            this.dbService.deleteCard(id)
                .then(count => {
                    _.remove(this._myCards, myCard => myCard.id === id);
                    observer.next(true);
                    observer.complete();
                });
        });
    }
}