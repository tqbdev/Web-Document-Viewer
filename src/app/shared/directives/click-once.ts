import { Attribute, Directive, forwardRef, HostListener, Renderer, ElementRef, OnInit } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { create as createLadda, LaddaButton } from 'ladda';

@Directive({
    selector: '[sbClickOnce]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: forwardRef(() => SbClickOnceDirective), multi: true }
    ]
})
export class SbClickOnceDirective implements OnInit {
    ladda: LaddaButton;
    private isLoading: any;
    constructor(private elmentRef: ElementRef,
        private renderer: Renderer) {
        this.renderer.setElementAttribute(this.elmentRef.nativeElement, 'ladda', 'true');
    }

    ngOnInit() {
        this.ladda = createLadda(this.elmentRef.nativeElement);
        setTimeout(() => { this.ladda.stop() }, 0);
    }

    ngOnDestroy() {
        if (this.ladda) {
            this.ladda.remove();
        }

    }
    @HostListener('click', ['$event'])
    clickEvent(event) {
        if (!this.isLoading) {
            this.isLoading = true;
            this.ladda.start();
        }

        setTimeout(() => {
            this.ladda.stop();
            this.isLoading = false;
        }, 300);
    }
}
