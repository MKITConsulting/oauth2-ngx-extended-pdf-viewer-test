import {APP_INITIALIZER, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import './vendor';
import {JhipsterOauth2SampleApplicationSharedModule} from 'app/shared/shared.module';
import {JhipsterOauth2SampleApplicationCoreModule} from 'app/core/core.module';
import {JhipsterOauth2SampleApplicationAppRoutingModule} from './app-routing.module';
import {JhipsterOauth2SampleApplicationHomeModule} from './home/home.module';
import {JhipsterOauth2SampleApplicationEntityModule} from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import {MainComponent} from './layouts/main/main.component';
import {NavbarComponent} from './layouts/navbar/navbar.component';
import {FooterComponent} from './layouts/footer/footer.component';
import {PageRibbonComponent} from './layouts/profiles/page-ribbon.component';
import {ActiveMenuDirective} from './layouts/navbar/active-menu.directive';
import {ErrorComponent} from './layouts/error/error.component';
import {NgxExtendedPdfModule} from "app/ngx-extended-pdf/ngx-extended-pdf.module";
import {KeycloakService} from "app/oauth2/KeycloakService";


export function kcFactory(keycloakService: KeycloakService): () => void {
    return () => keycloakService.init();
}

@NgModule({
    imports: [
        BrowserModule,
        JhipsterOauth2SampleApplicationSharedModule,
        JhipsterOauth2SampleApplicationCoreModule,
        JhipsterOauth2SampleApplicationHomeModule,
        NgxExtendedPdfModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
        JhipsterOauth2SampleApplicationEntityModule,
        JhipsterOauth2SampleApplicationAppRoutingModule,
    ],
    providers: [KeycloakService,
        {
            provide: APP_INITIALIZER,
            useFactory: kcFactory,
            deps: [KeycloakService],
            multi: true
        }],
    declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
    bootstrap: [MainComponent],
})
export class JhipsterOauth2SampleApplicationAppModule {
}
