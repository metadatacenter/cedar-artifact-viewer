import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { NgxYoutubePlayer14Module } from 'ngx-youtube-player-14';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OverlayModule } from '@angular/cdk/overlay';
import { AppComponentProd } from './app.component.prod';
import { SharedModule } from './modules/shared/shared.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { CedarArtifactViewerWrapperComponent } from './modules/shared/components/cedar-artifact-viewer-wrapper/cedar-artifact-viewer-wrapper.component';

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, '/assets/i18n-cav/');
}

@NgModule({
  declarations: [AppComponentProd],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    NgxYoutubePlayer14Module.forRoot(),
    OverlayModule,
    SharedModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [],
  bootstrap: [],
  entryComponents: [CedarArtifactViewerWrapperComponent],
})
export class AppModuleProd {
  constructor(private injector: Injector) {}

  ngDoBootstrap(): void {
    const ngCedarArtifactViewer = createCustomElement(
      CedarArtifactViewerWrapperComponent,
      {
        injector: this.injector,
      },
    );
    customElements.define('cedar-artifact-viewer', ngCedarArtifactViewer);
  }
}
