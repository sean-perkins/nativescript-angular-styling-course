import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { PageOneComponent } from "./item/page-1.component";
import { PageTwoComponent } from "./item/page-2.component";
import { PageThreeComponent } from "./item/page-3.component";

const routes: Routes = [
    { path: "", redirectTo: "/items/page-1", pathMatch: "full" },
    {
        path: "items",
        component: ItemsComponent,
        children: [
            { path: '', pathMatch: 'full', redirectTo: '/items/page-1' },
            {
                path: 'page-1',
                component: PageOneComponent
            },
            {
                path: 'page-2',
                component: PageTwoComponent
            },
            {
                path: 'page-3',
                component: PageThreeComponent
            }
        ]
    },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
