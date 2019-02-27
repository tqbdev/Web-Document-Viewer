import { Attribute, Directive, forwardRef } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
    selector: '[sbValidateEqual][formControlName],[sbValidateEqual][formControl],[sbValidateEqual][ngModel]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: forwardRef(() => SbEqualValidatorDirective), multi: true }
    ]
})
export class SbEqualValidatorDirective implements Validator {
    constructor( @Attribute('sbValidateEqual') public sbValidateEqual: string) { }

    validate(c: AbstractControl): { [key: string]: any } {
        // self value (e.g. retype password)
        const v = c.value;

        // control value (e.g. password)
        const e = c.root.get(this.sbValidateEqual);

        // value not equal
        if (e && v !== e.value) {
            return {
                sbValidateEqual: false
            };
        }
        return null;
    }
}
