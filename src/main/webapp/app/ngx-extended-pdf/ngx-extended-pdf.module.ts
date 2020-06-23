import {NgModule} from '@angular/core';
import {NgxExtendedPdfTestComponent} from './ngx-extended-pdf-test/ngx-extended-pdf-test.component';
import {JhipsterOauth2SampleApplicationSharedModule} from "app/shared/shared.module";
import {NgxExtendedPdfViewerModule} from "ngx-extended-pdf-viewer";

@NgModule({
    imports: [JhipsterOauth2SampleApplicationSharedModule, NgxExtendedPdfViewerModule],
    declarations: [NgxExtendedPdfTestComponent]
})
export class NgxExtendedPdfModule {
}
