import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

const googleDocs = 'https://docs.google.com/gview?embedded=true&url=';

import * as ext from 'ext-name';
import * as _ from 'lodash';
import { AppConstants } from '../../app.constant';

@Component({
    selector: 'sb-document',
    templateUrl: './document.html',
    styleUrls: ['./document.scss']
})
export class SbDocument implements OnInit {
    fileURL: any;
    isPdf: any = true;
    constructor(private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        const fileName = this.activatedRoute.params['value'].fileName;
        const extName = _.get(ext(fileName), '[0].ext');
        this.isPdf = extName === 'pdf';

        if (!this.isPdf) {
            if (AppConstants.FILE_ENDPOINT) {
                this.fileURL = `${googleDocs}${
                    AppConstants.FILE_ENDPOINT
                }${fileName}`;
            } else {
                this.fileURL = `${googleDocs}${
                    window.location.origin
                }/assets/${fileName}`;
            }
        } else {
            this.fileURL = `/assets/${fileName}`;
        }
    }
}
