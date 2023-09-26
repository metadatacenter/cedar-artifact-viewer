import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { NgxYoutubePlayer14Module } from 'ngx-youtube-player-14';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MetadataFormComponent } from './modules/shared/components/metadata-form/metadata-form.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { AppComponentProd } from './app.component.prod';
import { SharedModule } from './modules/shared/shared.module';

@NgModule({
  declarations: [
    AppComponentProd
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxYoutubePlayer14Module.forRoot(),
    OverlayModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [],
  entryComponents: [
    MetadataFormComponent
  ]
})
export class AppModuleProd {

  constructor(private injector: Injector) {
  }

  ngDoBootstrap(): void {
    const ngCedarForm = createCustomElement(MetadataFormComponent, {
      injector: this.injector
    });
    customElements.define('cedar-form', ngCedarForm);
  }
}
