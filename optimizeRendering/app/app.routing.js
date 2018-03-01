"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var items_component_1 = require("./item/items.component");
var page_1_component_1 = require("./item/page-1.component");
var page_2_component_1 = require("./item/page-2.component");
var page_3_component_1 = require("./item/page-3.component");
var routes = [
    { path: "", redirectTo: "/items/page-1", pathMatch: "full" },
    {
        path: "items",
        component: items_component_1.ItemsComponent,
        children: [
            { path: '', pathMatch: 'full', redirectTo: '/items/page-1' },
            {
                path: 'page-1',
                component: page_1_component_1.PageOneComponent
            },
            {
                path: 'page-2',
                component: page_2_component_1.PageTwoComponent
            },
            {
                path: 'page-3',
                component: page_3_component_1.PageThreeComponent
            }
        ]
    },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUN6QyxzREFBdUU7QUFHdkUsMERBQXdEO0FBRXhELDREQUEyRDtBQUMzRCw0REFBMkQ7QUFDM0QsNERBQTZEO0FBRTdELElBQU0sTUFBTSxHQUFXO0lBQ25CLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUU7SUFDNUQ7UUFDSSxJQUFJLEVBQUUsT0FBTztRQUNiLFNBQVMsRUFBRSxnQ0FBYztRQUN6QixRQUFRLEVBQUU7WUFDTixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsZUFBZSxFQUFFO1lBQzVEO2dCQUNJLElBQUksRUFBRSxRQUFRO2dCQUNkLFNBQVMsRUFBRSxtQ0FBZ0I7YUFDOUI7WUFDRDtnQkFDSSxJQUFJLEVBQUUsUUFBUTtnQkFDZCxTQUFTLEVBQUUsbUNBQWdCO2FBQzlCO1lBQ0Q7Z0JBQ0ksSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsU0FBUyxFQUFFLHFDQUFrQjthQUNoQztTQUNKO0tBQ0o7Q0FDSixDQUFDO0FBTUY7SUFBQTtJQUFnQyxDQUFDO0lBQXBCLGdCQUFnQjtRQUo1QixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbkQsT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUM7U0FDdEMsQ0FBQztPQUNXLGdCQUFnQixDQUFJO0lBQUQsdUJBQUM7Q0FBQSxBQUFqQyxJQUFpQztBQUFwQiw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7IEl0ZW1zQ29tcG9uZW50IH0gZnJvbSBcIi4vaXRlbS9pdGVtcy5jb21wb25lbnRcIjtcbmltcG9ydCB7IEl0ZW1EZXRhaWxDb21wb25lbnQgfSBmcm9tIFwiLi9pdGVtL2l0ZW0tZGV0YWlsLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgUGFnZU9uZUNvbXBvbmVudCB9IGZyb20gXCIuL2l0ZW0vcGFnZS0xLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgUGFnZVR3b0NvbXBvbmVudCB9IGZyb20gXCIuL2l0ZW0vcGFnZS0yLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgUGFnZVRocmVlQ29tcG9uZW50IH0gZnJvbSBcIi4vaXRlbS9wYWdlLTMuY29tcG9uZW50XCI7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICAgIHsgcGF0aDogXCJcIiwgcmVkaXJlY3RUbzogXCIvaXRlbXMvcGFnZS0xXCIsIHBhdGhNYXRjaDogXCJmdWxsXCIgfSxcbiAgICB7XG4gICAgICAgIHBhdGg6IFwiaXRlbXNcIixcbiAgICAgICAgY29tcG9uZW50OiBJdGVtc0NvbXBvbmVudCxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgIHsgcGF0aDogJycsIHBhdGhNYXRjaDogJ2Z1bGwnLCByZWRpcmVjdFRvOiAnL2l0ZW1zL3BhZ2UtMScgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRoOiAncGFnZS0xJyxcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ6IFBhZ2VPbmVDb21wb25lbnRcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGF0aDogJ3BhZ2UtMicsXG4gICAgICAgICAgICAgICAgY29tcG9uZW50OiBQYWdlVHdvQ29tcG9uZW50XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhdGg6ICdwYWdlLTMnLFxuICAgICAgICAgICAgICAgIGNvbXBvbmVudDogUGFnZVRocmVlQ29tcG9uZW50XG4gICAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICB9LFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzKV0sXG4gICAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgQXBwUm91dGluZ01vZHVsZSB7IH1cbiJdfQ==