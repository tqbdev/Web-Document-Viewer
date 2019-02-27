import { Directive, forwardRef, Attribute } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
    selector: '[sbValidateNationalId]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: forwardRef(() => SbValidateNationalIdDirective), multi: true }
    ]
})
export class SbValidateNationalIdDirective implements Validator {

    constructor(@Attribute('validNationalId') public validNationalId: string) { }

    validate(c: AbstractControl): { [key: string]: any } {

        const num = c.value;

        if (!num) {
            return;
        }

        const year = (new Date()).getFullYear();
        if (num.length === 10) {	// old NIC number
            // rule : last char is "v" or "x"
            const finalChar = num.charAt(num.length - 1);
            if (!isNaN(+num.substring(0, 9)) &&
                (finalChar === 'v' || finalChar === 'x' || finalChar === 'V' || finalChar === 'X')) {
                return null;
            }
        } else if (num.length === 12) { // new NIC number
            // rule : 2 first num >= 19
            if (+num.substring(0, 2) >= 19 &&
                !isNaN(+num)) {
                return null;
            }
        }

        return {
            validNationalId: {
                valid: false
            }
        };
    }


}
