import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { NgxYoutubePlayer14Module } from 'ngx-youtube-player-14';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ArtifactFormComponent } from './modules/shared/components/artifact-form/artifact-form.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { AppComponentDev } from './app.component.dev';
import { SharedModule } from './modules/shared/shared.module';

@NgModule({
  declarations: [
    AppComponentDev
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxYoutubePlayer14Module.forRoot(),
    OverlayModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [
    AppComponentDev
  ],
  entryComponents: [
    ArtifactFormComponent
  ]
})
export class AppModuleDev {

  constructor(private injector: Injector) {
  }

  ngDoBootstrap(): void {
    const ngCedarArtifactViewer = createCustomElement(ArtifactFormComponent, {
      injector: this.injector
    });
    customElements.define('cedar-artifact-viewer', ngCedarArtifactViewer);
  }
}
