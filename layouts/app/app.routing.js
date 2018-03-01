"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var items_component_1 = require("./item/items.component");
var absolute_layout_component_1 = require("./absolute-layout/absolute-layout.component");
var stack_layout_component_1 = require("./stack-layout/stack-layout.component");
var flex_layout_component_1 = require("./flex-layout/flex-layout.component");
var grid_layout_component_1 = require("./grid-layout/grid-layout.component");
var wrap_layout_component_1 = require("./wrap-layout/wrap-layout.component");
var routes = [
    { path: "", redirectTo: "/items", pathMatch: "full" },
    { path: "items", component: items_component_1.ItemsComponent },
    { path: 'absolute-layout', component: absolute_layout_component_1.AbsoluteLayoutComponent },
    { path: 'stack-layout', component: stack_layout_component_1.StackLayoutComponent },
    { path: 'flex-layout', component: flex_layout_component_1.FlexLayoutComponent },
    { path: 'grid-layout', component: grid_layout_component_1.GridLayoutComponent },
    { path: 'wrap-layout', component: wrap_layout_component_1.WrapLayoutComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forRoot(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUN6QyxzREFBdUU7QUFHdkUsMERBQXdEO0FBRXhELHlGQUFzRjtBQUN0RixnRkFBNkU7QUFDN0UsNkVBQTBFO0FBQzFFLDZFQUEwRTtBQUMxRSw2RUFBMEU7QUFFMUUsSUFBTSxNQUFNLEdBQVc7SUFDbkIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRTtJQUNyRCxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLGdDQUFjLEVBQUU7SUFDNUMsRUFBRSxJQUFJLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLG1EQUF1QixFQUFFO0lBQy9ELEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxTQUFTLEVBQUUsNkNBQW9CLEVBQUU7SUFDekQsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSwyQ0FBbUIsRUFBRTtJQUN2RCxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLDJDQUFtQixFQUFFO0lBQ3ZELEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUsMkNBQW1CLEVBQUU7Q0FDMUQsQ0FBQztBQU1GO0lBQUE7SUFBZ0MsQ0FBQztJQUFwQixnQkFBZ0I7UUFKNUIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ25ELE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDO1NBQ3RDLENBQUM7T0FDVyxnQkFBZ0IsQ0FBSTtJQUFELHVCQUFDO0NBQUEsQUFBakMsSUFBaUM7QUFBcEIsNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBJdGVtc0NvbXBvbmVudCB9IGZyb20gXCIuL2l0ZW0vaXRlbXMuY29tcG9uZW50XCI7XG5cbmltcG9ydCB7IEFic29sdXRlTGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi9hYnNvbHV0ZS1sYXlvdXQvYWJzb2x1dGUtbGF5b3V0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdGFja0xheW91dENvbXBvbmVudCB9IGZyb20gJy4vc3RhY2stbGF5b3V0L3N0YWNrLWxheW91dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRmxleExheW91dENvbXBvbmVudCB9IGZyb20gJy4vZmxleC1sYXlvdXQvZmxleC1sYXlvdXQuY29tcG9uZW50JztcbmltcG9ydCB7IEdyaWRMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuL2dyaWQtbGF5b3V0L2dyaWQtbGF5b3V0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBXcmFwTGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi93cmFwLWxheW91dC93cmFwLWxheW91dC5jb21wb25lbnQnO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAgICB7IHBhdGg6IFwiXCIsIHJlZGlyZWN0VG86IFwiL2l0ZW1zXCIsIHBhdGhNYXRjaDogXCJmdWxsXCIgfSxcbiAgICB7IHBhdGg6IFwiaXRlbXNcIiwgY29tcG9uZW50OiBJdGVtc0NvbXBvbmVudCB9LFxuICAgIHsgcGF0aDogJ2Fic29sdXRlLWxheW91dCcsIGNvbXBvbmVudDogQWJzb2x1dGVMYXlvdXRDb21wb25lbnQgfSxcbiAgICB7IHBhdGg6ICdzdGFjay1sYXlvdXQnLCBjb21wb25lbnQ6IFN0YWNrTGF5b3V0Q29tcG9uZW50IH0sXG4gICAgeyBwYXRoOiAnZmxleC1sYXlvdXQnLCBjb21wb25lbnQ6IEZsZXhMYXlvdXRDb21wb25lbnQgfSxcbiAgICB7IHBhdGg6ICdncmlkLWxheW91dCcsIGNvbXBvbmVudDogR3JpZExheW91dENvbXBvbmVudCB9LFxuICAgIHsgcGF0aDogJ3dyYXAtbGF5b3V0JywgY29tcG9uZW50OiBXcmFwTGF5b3V0Q29tcG9uZW50IH1cbl07XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyldLFxuICAgIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIEFwcFJvdXRpbmdNb2R1bGUgeyB9XG4iXX0=