"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var CheckmarkComponent = (function () {
    function CheckmarkComponent() {
        this.label = '';
    }
    CheckmarkComponent.prototype.toggle = function () {
        this.checked = !this.checked;
    };
    Object.defineProperty(CheckmarkComponent.prototype, "checkboxIcon", {
        get: function () {
            if (this.checked) {
                return String.fromCharCode(0xf046);
            }
            else {
                return String.fromCharCode(0xf096);
            }
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], CheckmarkComponent.prototype, "label", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], CheckmarkComponent.prototype, "checked", void 0);
    CheckmarkComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'ns-checkbox',
            templateUrl: './checkmark.component.html',
            styleUrls: ['./checkmark.component.css']
        })
    ], CheckmarkComponent);
    return CheckmarkComponent;
}());
exports.CheckmarkComponent = CheckmarkComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2ttYXJrLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNoZWNrbWFyay5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBaUQ7QUFRakQ7SUFOQTtRQVFhLFVBQUssR0FBRyxFQUFFLENBQUM7SUFpQnhCLENBQUM7SUFkRyxtQ0FBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDakMsQ0FBQztJQUVELHNCQUFJLDRDQUFZO2FBQWhCO1lBQ0ksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQ2YsTUFBTSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDdkMsQ0FBQztZQUNELElBQUksQ0FBQyxDQUFDO2dCQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3ZDLENBQUM7UUFDTCxDQUFDOzs7T0FBQTtJQWRRO1FBQVIsWUFBSyxFQUFFOztxREFBWTtJQUNYO1FBQVIsWUFBSyxFQUFFOzt1REFBa0I7SUFIakIsa0JBQWtCO1FBTjlCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGFBQWE7WUFDdkIsV0FBVyxFQUFFLDRCQUE0QjtZQUN6QyxTQUFTLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztTQUMzQyxDQUFDO09BQ1csa0JBQWtCLENBbUI5QjtJQUFELHlCQUFDO0NBQUEsQUFuQkQsSUFtQkM7QUFuQlksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICducy1jaGVja2JveCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2NoZWNrbWFyay5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vY2hlY2ttYXJrLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDaGVja21hcmtDb21wb25lbnQge1xuXG4gICAgQElucHV0KCkgbGFiZWwgPSAnJztcbiAgICBASW5wdXQoKSBjaGVja2VkOiBib29sZWFuO1xuXG4gICAgdG9nZ2xlKCkge1xuICAgICAgICB0aGlzLmNoZWNrZWQgPSAhdGhpcy5jaGVja2VkO1xuICAgIH1cblxuICAgIGdldCBjaGVja2JveEljb24oKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKHRoaXMuY2hlY2tlZCkge1xuICAgICAgICAgICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoMHhmMDQ2KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4ZjA5Nik7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuIl19