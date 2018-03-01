import { Component, OnInit, OnDestroy } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'page-three',
    templateUrl: './page-3.component.html'
})
export class PageThreeComponent implements OnInit, OnDestroy {

    totalCount = Array(1000).fill('');

    renderView = false;

    private renderViewTimeout: any;

    ngOnInit() {
        this.renderViewTimeout = setTimeout(() => {
            this.renderView = true;
        }, 500);
    }

    ngOnDestroy() {
        clearTimeout(this.renderViewTimeout);
    }

}
