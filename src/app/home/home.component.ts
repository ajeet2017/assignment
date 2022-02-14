import { Component, OnInit } from '@angular/core';

import { ModalService } from '../_modal';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent implements OnInit {
    bodyText: string;

    constructor(private modalService: ModalService) { }

    ngOnInit() {
        this.bodyText = 'Custom Model Content Area';
    }

    openModal(id: string) {
        this.modalService.open(id);
    }

    closeModal(id: string) {
        this.modalService.close(id);
    }
}