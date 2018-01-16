import {Component, OnInit} from '@angular/core';
import {ModalService} from "../../service/modal.service";
import {fadeIn} from "../../animate/fadeIn";

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.css'],
    animations:[fadeIn]
})
export class ModalComponent implements OnInit {

    constructor(private modalService: ModalService) {
    }

    ngOnInit() {
    }

}
