import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
    moduleId: module.id,
    selector: 'fm-about',
    templateUrl: 'fm-about.component.html'
})

export class FMAboutComponent implements OnInit {
    constructor(private routerExtentions: RouterExtensions) { }

    ngOnInit() { }

    // Event Listeners
    public goBack() {
        this.routerExtentions.backToPreviousPage();
    }
}