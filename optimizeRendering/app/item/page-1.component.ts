import { Component } from "@angular/core";
import { ItemService } from "./item.service";

@Component({
    moduleId: module.id,
    selector: 'page-one',
    templateUrl: './page-1.component.html'
})
export class PageOneComponent {

    constructor(private itemService: ItemService) {

    }

}
