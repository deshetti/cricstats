import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DatePipe } from '@angular/common';

import {
    CricstatsSharedLibsModule,
    CricstatsSharedCommonModule,
    CSRFService,
    AuthServerProvider,
    AccountService,
    UserService,
    StateStorageService,
    LoginService,
    Principal,
    JhiTrackerService,
    HasAnyAuthorityDirective,
} from './';

@NgModule({
    imports: [
        CricstatsSharedLibsModule,
        CricstatsSharedCommonModule
    ],
    declarations: [
        HasAnyAuthorityDirective
    ],
    providers: [
        LoginService,
        AccountService,
        StateStorageService,
        Principal,
        CSRFService,
        JhiTrackerService,
        AuthServerProvider,
        UserService,
        DatePipe
    ],
    exports: [
        CricstatsSharedCommonModule,
        HasAnyAuthorityDirective,
        DatePipe
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class CricstatsSharedModule {}
