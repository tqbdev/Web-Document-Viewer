import { SbClickOnceDirective } from './click-once';
import { SbValidateNationalIdDirective } from '@sb-shared/directives/validate-national-id';
import { NgModule } from '@angular/core';
import { SbEqualValidatorDirective } from '@sb-shared/directives/equal-validator';
@NgModule({
    imports: [
    ],
    providers: [
    ],
    declarations: [
        SbEqualValidatorDirective,
        SbValidateNationalIdDirective,
        SbClickOnceDirective
    ],
    exports: [
        SbEqualValidatorDirective,
        SbValidateNationalIdDirective,
        SbClickOnceDirective
    ]
})
export class SbDirectivesModule { }
