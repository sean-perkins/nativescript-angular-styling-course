import { Injectable } from "@angular/core";

import { Item } from "./item";

@Injectable()
export class ItemService {
    private items = new Array<any>(
        { id: 1, name: "AbsoluteLayout", route: '/absolute-layout' },
        { id: 3, name: "StackLayout", route: '/stack-layout' },
        { id: 4, name: "GridLayout", route: '/grid-layout' },
        { id: 5, name: "FlexBoxLayout", route: '/flex-layout' },
        { id: 6, name: "WrapLayout", route: '/wrap-layout' },
    );

    getItems(): Item[] {
        return this.items;
    }

    getItem(id: number): Item {
        return this.items.filter(item => item.id === id)[0];
    }
}
