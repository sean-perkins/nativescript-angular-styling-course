import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { ItemsComponent } from "./item/items.component";

import { AbsoluteLayoutComponent } from './absolute-layout/absolute-layout.component';
import { StackLayoutComponent } from './stack-layout/stack-layout.component';
import { FlexLayoutComponent } from './flex-layout/flex-layout.component';
import { GridLayoutComponent } from './grid-layout/grid-layout.component';
import { WrapLayoutComponent } from './wrap-layout/wrap-layout.component';

const routes: Routes = [
    { path: "", redirectTo: "/items", pathMatch: "full" },
    { path: "items", component: ItemsComponent },
    { path: 'absolute-layout', component: AbsoluteLayoutComponent },
    { path: 'stack-layout', component: StackLayoutComponent },
    { path: 'flex-layout', component: FlexLayoutComponent },
    { path: 'grid-layout', component: GridLayoutComponent },
    { path: 'wrap-layout', component: WrapLayoutComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
