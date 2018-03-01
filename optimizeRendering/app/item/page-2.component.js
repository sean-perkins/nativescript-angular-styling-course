"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var PageTwoComponent = (function () {
    function PageTwoComponent() {
        this.totalCount = Array(1000).fill('');
        this.renderView = false;
    }
    PageTwoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.renderViewTimeout = setTimeout(function () {
            _this.renderView = true;
        }, 500);
    };
    PageTwoComponent.prototype.ngOnDestroy = function () {
        clearTimeout(this.renderViewTimeout);
    };
    PageTwoComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'page-two',
            templateUrl: './page-2.component.html'
        })
    ], PageTwoComponent);
    return PageTwoComponent;
}());
exports.PageTwoComponent = PageTwoComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS0yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBhZ2UtMi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBNkQ7QUFPN0Q7SUFMQTtRQU9JLGVBQVUsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRWxDLGVBQVUsR0FBRyxLQUFLLENBQUM7SUFjdkIsQ0FBQztJQVZHLG1DQUFRLEdBQVI7UUFBQSxpQkFJQztRQUhHLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxVQUFVLENBQUM7WUFDaEMsS0FBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDM0IsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ1osQ0FBQztJQUVELHNDQUFXLEdBQVg7UUFDSSxZQUFZLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDekMsQ0FBQztJQWhCUSxnQkFBZ0I7UUFMNUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsVUFBVTtZQUNwQixXQUFXLEVBQUUseUJBQXlCO1NBQ3pDLENBQUM7T0FDVyxnQkFBZ0IsQ0FrQjVCO0lBQUQsdUJBQUM7Q0FBQSxBQWxCRCxJQWtCQztBQWxCWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ3BhZ2UtdHdvJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vcGFnZS0yLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBQYWdlVHdvQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gICAgdG90YWxDb3VudCA9IEFycmF5KDEwMDApLmZpbGwoJycpO1xuXG4gICAgcmVuZGVyVmlldyA9IGZhbHNlO1xuXG4gICAgcHJpdmF0ZSByZW5kZXJWaWV3VGltZW91dDogYW55O1xuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMucmVuZGVyVmlld1RpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyVmlldyA9IHRydWU7XG4gICAgICAgIH0sIDUwMCk7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnJlbmRlclZpZXdUaW1lb3V0KTtcbiAgICB9XG5cbn1cbiJdfQ==