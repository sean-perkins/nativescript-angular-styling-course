import { Component, AfterViewInit } from "@angular/core";
import * as app from 'tns-core-modules/application';

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
})

export class AppComponent implements AfterViewInit {

    ngAfterViewInit() {
        const brandColor = '#39AF78'; // TODO load this from an API
        app.addCss(`
            .accent {
                color: ${brandColor};
            }
            .accent-bg {
                background-color: ${brandColor};
            }
        `);
    }

}
