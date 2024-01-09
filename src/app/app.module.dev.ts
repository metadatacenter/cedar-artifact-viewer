import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { NgxYoutubePlayer14Module } from 'ngx-youtube-player-14';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OverlayModule } from '@angular/cdk/overlay';
import { AppComponentDev } from './app.component.dev';
import { SharedModule } from './modules/shared/shared.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { catchError } from 'rxjs/operators';
import * as fallbackMapEN from '../assets/i18n-cav/en.json';
import * as fallbackMapHU from '../assets/i18n-cav/hu.json';
import { CedarArtifactViewerWrapperComponent } from './modules/shared/components/cedar-artifact-viewer-wrapper/cedar-artifact-viewer-wrapper.component';

export class FallbackTranslateLoader implements TranslateLoader {
  constructor(
    private http: HttpClient,
    private fallback: object,
  ) {}

  getTranslation(lang: string): Observable<any> {
    console.log('GET translation:' + lang);
    const httpLoader = new TranslateHttpLoader(this.http, '/assets/i18n-cav/');

    return httpLoader.getTranslation(lang).pipe(
      catchError((err) => {
        console.log('Translation file not found, using built-in version', err);
        if (Object.hasOwn(this.fallback, lang)) {
          return Promise.resolve(this.fallback[lang]);
        } else {
          return Promise.resolve(null);
        }
      }),
    );
  }
}

export function FallbackTranslateLoaderFactory(
  http: HttpClient,
  fallback: any,
): TranslateLoader {
  return new FallbackTranslateLoader(http, fallback);
}

@NgModule({
  declarations: [AppComponentDev],
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
        useFactory: (http: HttpClient) =>
          FallbackTranslateLoaderFactory(http, {
            en: fallbackMapEN,
            hu: fallbackMapHU,
          }),
        deps: [HttpClient],
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponentDev],
  entryComponents: [CedarArtifactViewerWrapperComponent],
})
export class AppModuleDev {
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
