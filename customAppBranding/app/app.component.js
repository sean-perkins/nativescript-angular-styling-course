"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app = require("tns-core-modules/application");
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngAfterViewInit = function () {
        var brandColor = '#39AF78'; // TODO load this from an API
        app.addCss("\n            .accent {\n                color: " + brandColor + ";\n            }\n            .accent-bg {\n                background-color: " + brandColor + ";\n            }\n        ");
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "ns-app",
            templateUrl: "app.component.html",
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUQ7QUFDekQsa0RBQW9EO0FBT3BEO0lBQUE7SUFjQSxDQUFDO0lBWkcsc0NBQWUsR0FBZjtRQUNJLElBQU0sVUFBVSxHQUFHLFNBQVMsQ0FBQyxDQUFDLDZCQUE2QjtRQUMzRCxHQUFHLENBQUMsTUFBTSxDQUFDLHFEQUVNLFVBQVUsc0ZBR0MsVUFBVSwrQkFFckMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQVpRLFlBQVk7UUFMeEIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFdBQVcsRUFBRSxvQkFBb0I7U0FDcEMsQ0FBQztPQUVXLFlBQVksQ0FjeEI7SUFBRCxtQkFBQztDQUFBLEFBZEQsSUFjQztBQWRZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBBZnRlclZpZXdJbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCAqIGFzIGFwcCBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtYXBwXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiYXBwLmNvbXBvbmVudC5odG1sXCIsXG59KVxuXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIGNvbnN0IGJyYW5kQ29sb3IgPSAnIzM5QUY3OCc7IC8vIFRPRE8gbG9hZCB0aGlzIGZyb20gYW4gQVBJXG4gICAgICAgIGFwcC5hZGRDc3MoYFxuICAgICAgICAgICAgLmFjY2VudCB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICR7YnJhbmRDb2xvcn07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYWNjZW50LWJnIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2JyYW5kQ29sb3J9O1xuICAgICAgICAgICAgfVxuICAgICAgICBgKTtcbiAgICB9XG5cbn1cbiJdfQ==