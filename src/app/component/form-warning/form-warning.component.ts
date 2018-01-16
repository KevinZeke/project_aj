import {Component, OnInit, Input, ElementRef} from '@angular/core';
import {Common, Dom} from "../../util/Common";

@Component({
    selector: 'app-form-warning',
    templateUrl: './form-warning.component.html',
    styleUrls: ['./form-warning.component.css']
})
export class FormWarningComponent implements OnInit {

    private className: object = {popover: true};

    @Input()
    private direction: string = "left";

    @Input()
    private title: string = "注意！";

    @Input()
    private message: string = "该项的填写不符合要求！";

    @Input()
    private target: any = null;

    private position: { top: number, left: number } = {top: 0, left: 0};

    constructor() {
    }

    ngOnInit() {
        let legalDirection = "left|right|bottom|top";
        let legalDirectionReg: RegExp = new RegExp(`^(${legalDirection})$`);
        if (legalDirectionReg.test(this.direction))
            this.className[this.direction] = true;
        else
            Common.warn(`form-warning组件必须接收direction组件的值为 ${legalDirection.replace(/\|/g, ' 或 ')} `);

        if (this.target) {
            this.computePos(Dom.info(this.target));
        }
    }

    private computePos(domInfo: any) {
        console.log(domInfo);
        const OFFSET = 2;
        switch (this.direction) {
            case 'left':
                break;
            case 'right':
                break;
            case 'top':
                break;
            case 'bottom':
                this.position.top = domInfo.top + domInfo.height + OFFSET;
                this.position.left = domInfo.left + domInfo.width / 2 + OFFSET;
                // console.log(this.position)
                break;
            default:
                break;
        }
    }


}
