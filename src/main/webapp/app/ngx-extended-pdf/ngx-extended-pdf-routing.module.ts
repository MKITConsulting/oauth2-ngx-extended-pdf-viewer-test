import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {NgxExtendedPdfTestComponent} from "app/ngx-extended-pdf/ngx-extended-pdf-test/ngx-extended-pdf-test.component";

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'test',
                component: NgxExtendedPdfTestComponent
            }
        ]),
    ],
})
export class NgxExtendedPdfRoutingModule {
}
