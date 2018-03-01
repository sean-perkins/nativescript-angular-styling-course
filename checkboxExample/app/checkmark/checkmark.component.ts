import { Component, Input } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'ns-checkbox',
    templateUrl: './checkmark.component.html',
    styleUrls: ['./checkmark.component.css']
})
export class CheckmarkComponent {

    @Input() label = '';
    @Input() checked: boolean;

    toggle() {
        this.checked = !this.checked;
    }

    get checkboxIcon(): string {
        if (this.checked) {
            return String.fromCharCode(0xf046);
        }
        else {
            return String.fromCharCode(0xf096);
        }
    }


}
