import { Component, Input } from '@angular/core';

@Component({
    selector: "fancy-checkbox",
    styleUrls: ["./fancyCheckbox.component.css"],
    template: "<label><input type='checkbox'/><span></span>{{label}}</label>"
})
export class FancyCheckbox {
    @Input() label: string
}