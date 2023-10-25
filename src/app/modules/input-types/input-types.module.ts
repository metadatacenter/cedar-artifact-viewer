import { NgModule } from '@angular/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule } from '@angular/material/form-field';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatChipsModule } from '@angular/material/chips';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { TranslateModule } from '@ngx-translate/core';
import { NgOptimizedImage } from '@angular/common';
import { TextfieldComponent } from './components/textfield/textfield.component';
import { TextareaComponent } from './components/textarea/textarea.component';
import { YoutubeComponent } from './components/youtube/youtube.component';
import { RichtextComponent } from './components/richtext/richtext.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { RadioComponent } from './components/radio/radio.component';
import { ListComponent } from './components/list/list.component';
import { DateComponent } from './components/date/date.component';
import { SectionComponent } from './components/section/section.component';
import { ControlledComponent } from './components/controlled/controlled.component';
import { ImageComponent } from './components/image/image.component';
import { AttributeValueComponent } from './components/attribute-value/attribute-value.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatRadioModule,
    MatIconModule,
    MatExpansionModule,
    MatButtonModule,
    MatTooltipModule,
    ClipboardModule,
    MatToolbarModule,
    MatRippleModule,
    MatPaginatorModule,
    MatChipsModule,
    MatGridListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgSelectModule,
    FormsModule,
    MatSelectModule,
    TranslateModule,
    NgOptimizedImage,
  ],
  declarations: [
    TextfieldComponent,
    TextareaComponent,
    YoutubeComponent,
    RichtextComponent,
    CheckboxComponent,
    RadioComponent,
    ListComponent,
    DateComponent,
    SectionComponent,
    ControlledComponent,
    ImageComponent,
    AttributeValueComponent,
  ],
  providers: [
    MatDatepickerModule,
    MatNativeDateModule,
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'outline' } },
  ],
  exports: [
    TextfieldComponent,
    TextareaComponent,
    YoutubeComponent,
    RichtextComponent,
    CheckboxComponent,
    RadioComponent,
    ListComponent,
    DateComponent,
    SectionComponent,
    ControlledComponent,
    ImageComponent,
    AttributeValueComponent,
  ],
})
export class InputTypesModule {}
