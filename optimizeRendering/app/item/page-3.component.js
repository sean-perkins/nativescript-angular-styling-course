"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var PageThreeComponent = (function () {
    function PageThreeComponent() {
        this.totalCount = Array(1000).fill('');
        this.renderView = false;
    }
    PageThreeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.renderViewTimeout = setTimeout(function () {
            _this.renderView = true;
        }, 500);
    };
    PageThreeComponent.prototype.ngOnDestroy = function () {
        clearTimeout(this.renderViewTimeout);
    };
    PageThreeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'page-three',
            templateUrl: './page-3.component.html'
        })
    ], PageThreeComponent);
    return PageThreeComponent;
}());
exports.PageThreeComponent = PageThreeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS0zLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBhZ2UtMy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBNkQ7QUFPN0Q7SUFMQTtRQU9JLGVBQVUsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRWxDLGVBQVUsR0FBRyxLQUFLLENBQUM7SUFjdkIsQ0FBQztJQVZHLHFDQUFRLEdBQVI7UUFBQSxpQkFJQztRQUhHLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxVQUFVLENBQUM7WUFDaEMsS0FBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDM0IsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ1osQ0FBQztJQUVELHdDQUFXLEdBQVg7UUFDSSxZQUFZLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDekMsQ0FBQztJQWhCUSxrQkFBa0I7UUFMOUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsWUFBWTtZQUN0QixXQUFXLEVBQUUseUJBQXlCO1NBQ3pDLENBQUM7T0FDVyxrQkFBa0IsQ0FrQjlCO0lBQUQseUJBQUM7Q0FBQSxBQWxCRCxJQWtCQztBQWxCWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ3BhZ2UtdGhyZWUnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9wYWdlLTMuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2VUaHJlZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICAgIHRvdGFsQ291bnQgPSBBcnJheSgxMDAwKS5maWxsKCcnKTtcblxuICAgIHJlbmRlclZpZXcgPSBmYWxzZTtcblxuICAgIHByaXZhdGUgcmVuZGVyVmlld1RpbWVvdXQ6IGFueTtcblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnJlbmRlclZpZXdUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlclZpZXcgPSB0cnVlO1xuICAgICAgICB9LCA1MDApO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5yZW5kZXJWaWV3VGltZW91dCk7XG4gICAgfVxuXG59XG4iXX0=