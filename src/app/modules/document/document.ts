import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

const googleDocs = 'https://docs.google.com/gview?embedded=true&url=';

@Component({
    selector: 'sb-document',
    templateUrl: './document.html',
    styleUrls: ['./document.scss']
})
export class SbDocument implements OnInit {
    fileURL: any;
    constructor(private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        const fileName = this.activatedRoute.params['value'].fileName;
        this.fileURL = `${googleDocs}${
            window.location.origin
        }/assets/${fileName}`;
    }
}
