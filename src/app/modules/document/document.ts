import { Component } from '@angular/core';

@Component({
    selector: 'sb-document',
    templateUrl: './document.html',
    styleUrls: ['./document.scss']
})
export class SbDocument {
    pdfSrc: any = 'assets/test.pdf';
    constructor() {}
}
