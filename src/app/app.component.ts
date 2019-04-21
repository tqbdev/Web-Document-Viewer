import { Component } from '@angular/core';

@Component({
    selector: 'body',
    template: '<router-outlet></router-outlet>'
})
export class AppComponent {
    constructor() {
        // (<any>window).pdfWorkerSrc = 'assets/pdfjs/build/pdf.worker.js';
        (<any>window).pdfWorkerSrc = 'assets/build/pdf.worker.js';
    }
}
