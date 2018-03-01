import { Component, OnInit, OnDestroy } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'page-two',
    templateUrl: './page-2.component.html'
})
export class PageTwoComponent implements OnInit, OnDestroy {

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
