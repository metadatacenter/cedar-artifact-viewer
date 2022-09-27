import {BrowserModule} from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';
import {createCustomElement} from '@angular/elements';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {NgxYoutubePlayer14Module} from 'ngx-youtube-player-14';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {DemoMaterialModule} from './shared/material-module';
import {FormComponent} from './components/form/form.component';
import {AttributeValueComponent} from './components/attribute-value/attribute-value.component';
import {QuestionComponent} from './components/question/question.component';
import {ControlledComponent} from './components/controlled/controlled.component';
import {DateComponent} from './components/date/date.component';

import {ElementComponent} from './components/element/element.component';
import {TextfieldComponent} from './components/textfield/textfield.component';
import {TextareaComponent} from './components/textarea/textarea.component';
import {ListComponent} from './components/list/list.component';
import {RadioComponent} from './components/radio/radio.component';
import {CheckboxComponent} from './components/checkbox/checkbox.component';

import {YoutubeComponent} from './components/youtube/youtube.component';
import {SectionComponent} from './components/section/section.component';
import {ImageComponent} from './components/image/image.component';
import {RichtextComponent} from './components/richtext/richtext.component';
import {OverlayModule} from '@angular/cdk/overlay';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    AttributeValueComponent,
    CheckboxComponent,
    ControlledComponent,
    DateComponent,
    ElementComponent,
    ImageComponent,
    ListComponent,
    QuestionComponent,
    RadioComponent,
    RichtextComponent,
    SectionComponent,
    TextareaComponent,
    TextfieldComponent,
    YoutubeComponent
  ],
  imports: [
    BrowserModule,
    DemoMaterialModule,
    ReactiveFormsModule,
    CommonModule,
    DemoMaterialModule,
    BrowserAnimationsModule,
    NgxYoutubePlayer14Module.forRoot(),
    FontAwesomeModule,
    OverlayModule,

  ],
  providers: [],
  bootstrap: [],
  entryComponents: [
    AppComponent,
    FormComponent
  ]
})
export class AppModule {

  constructor(private injector: Injector) {
  }

  ngDoBootstrap(): void {

    const {injector} = this;

    // // create custom elements from angular components
    // const ngCustomElement = createCustomElement(CustomelementComponent, {injector});
    //
    // // define in browser registry
    // customElements.define('custom-element', ngCustomElement);

    const ngCedarForm = createCustomElement(FormComponent, { injector: this.injector});
    // const ngCedarForm = createCustomElement(FormComponent, {injector});
    customElements.define('cedar-form', ngCedarForm);

  }
}
