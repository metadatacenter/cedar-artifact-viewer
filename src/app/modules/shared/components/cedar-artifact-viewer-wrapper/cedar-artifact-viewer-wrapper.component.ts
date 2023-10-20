import {
  Component,
  Input,
  OnDestroy,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { HttpStatusCode } from '@angular/common/http';
import { Subject } from 'rxjs';
import { SampleTemplatesService } from '../sample-templates/sample-templates.service';
import { takeUntil } from 'rxjs/operators';
import { JsonSchema } from '../../models/json-schema.model';
import { CedarArtifactViewerComponent } from '../cedar-artifact-viewer/cedar-artifact-viewer.component';
import { MessageHandlerService } from '../../services/message-handler.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-cedar-artifact-viewer-wrapper',
  templateUrl: './cedar-artifact-viewer-wrapper.component.html',
  styleUrls: ['./cedar-artifact-viewer-wrapper.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CedarArtifactViewerWrapperComponent implements OnInit, OnDestroy {
  innerConfig: object = null;
  private initialized = false;
  private configSet = false;

  templateJson: object = null;
  sampleTemplateLoaderObject = null;
  showSpinnerBeforeInit = true;
  protected onDestroySubject = new Subject<void>();
  private metadata: object = null;
  private loadedTemplateJson: object = null;
  private loadedMetadata: object = null;

  constructor(
    private messageHandlerService: MessageHandlerService,
    private sampleTemplateService: SampleTemplatesService,
    private translateService: TranslateService,
  ) {
    this.sampleTemplateLoaderObject = this;

    const fallbackLanguage = 'en';
    const defaultLanguage = 'en';
    this.translateService.setDefaultLang(fallbackLanguage);
    this.translateService.use(defaultLanguage);
  }

  ngOnInit(): void {
    this.sampleTemplateService.templateJson$
      .pipe(takeUntil(this.onDestroySubject))
      .subscribe((templateJson) => {
        if (templateJson) {
          this.loadedTemplateJson = Object.values(templateJson)[0];
        } else {
          this.loadedTemplateJson = null;
        }
        this.triggerUpdateOnInjectedSampledata();
      });
    this.sampleTemplateService.metadataJson$
      .pipe(takeUntil(this.onDestroySubject))
      .subscribe((metadataJson) => {
        if (metadataJson) {
          this.loadedMetadata = Object.values(metadataJson)[0];
        } else {
          this.loadedMetadata = null;
        }
        this.triggerUpdateOnInjectedSampledata();
      });
    this.initialized = true;
    this.doInitialize();
  }

  private initDataFromInstance(): void {}

  @Input() set templateObject(template: object) {
    this.templateJson = template;
  }

  @Input() set instanceObject(instance: object) {
    this.metadata = instance;
    this.initDataFromInstance();
  }

  @Input() loadConfigFromURL(
    jsonURL,
    successHandler = null,
    errorHandler = null,
  ): void {
    const that = this;
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === HttpStatusCode.Ok) {
          const jsonConfig = JSON.parse(xhr.responseText);
          that.config = jsonConfig;

          if (successHandler) {
            successHandler(jsonConfig);
          }
        } else {
          if (errorHandler) {
            errorHandler(xhr);
          }
        }
      }
    };
    xhr.open('GET', jsonURL, true);
    xhr.send();
  }

  ngOnDestroy(): void {
    this.onDestroySubject.next();
    this.onDestroySubject.complete();
  }

  @Input() set config(value: object) {
    this.messageHandlerService.traceObject(
      'CEDAR Embeddable Editor config set to:',
      value,
    );

    if (value != null) {
      this.innerConfig = value;
      this.configSet = true;
      this.doInitialize();
    }
  }

  @Input() set eventHandler(value: object) {
    this.messageHandlerService.injectEventHandler(value);
  }

  private deleteContext(obj): void {
    const keyCount = Object.keys(obj).length;
    if (
      keyCount === 2 &&
      Object.hasOwn(obj, JsonSchema.atId) &&
      Object.hasOwn(obj, JsonSchema.rdfsLabel)
    ) {
      // do nothing, it is a controlled term
    } else if (keyCount === 1 && Object.hasOwn(obj, JsonSchema.atId)) {
      // do nothing, it is a link
    } else {
      Object.keys(obj).forEach((key) => {
        delete obj[JsonSchema.atContext];
        delete obj[JsonSchema.atId];
        delete obj[JsonSchema.oslcModifiedBy];
        delete obj[JsonSchema.pavCreatedOn];
        delete obj[JsonSchema.pavLastUpdatedOn];
        delete obj[JsonSchema.pavCreatedBy];
        delete obj[JsonSchema.schemaIsBasedOn];
        delete obj[JsonSchema.schemaName];
        delete obj[JsonSchema.schemaDescription];
        if (typeof obj[key] === 'object' && obj[key] !== null) {
          this.deleteContext(obj[key]);
        }
      });
    }
  }

  private doInitialize(): void {
    if (this.initialized && this.configSet) {
      if (
        Object.hasOwn(
          this.innerConfig,
          CedarArtifactViewerComponent.LOAD_SAMPLE_TEMPLATE_NAME,
        )
      ) {
        this.sampleTemplateService.loadTemplate(
          this.innerConfig[
            CedarArtifactViewerComponent.TEMPLATE_LOCATION_PREFIX
          ],
          this.innerConfig[
            CedarArtifactViewerComponent.LOAD_SAMPLE_TEMPLATE_NAME
          ],
        );
      }
      if (
        Object.hasOwn(
          this.innerConfig,
          CedarArtifactViewerComponent.SHOW_SPINNER_BEFORE_INIT,
        )
      ) {
        this.showSpinnerBeforeInit =
          this.innerConfig[
            CedarArtifactViewerComponent.SHOW_SPINNER_BEFORE_INIT
          ];
      }

      if (
        Object.hasOwn(
          this.innerConfig,
          CedarArtifactViewerComponent.FALLBACK_LANGUAGE,
        )
      ) {
        const fallbackLanguage =
          this.innerConfig[CedarArtifactViewerComponent.FALLBACK_LANGUAGE];
        this.translateService.setDefaultLang(fallbackLanguage);
      }
      if (
        Object.hasOwn(
          this.innerConfig,
          CedarArtifactViewerComponent.DEFAULT_LANGUAGE,
        )
      ) {
        const defaultLanguage =
          this.innerConfig[CedarArtifactViewerComponent.DEFAULT_LANGUAGE];
        this.translateService.use(defaultLanguage);
      }
    }
  }

  editorDataReady(): boolean {
    return this.innerConfig != null && this.templateJson != null;
  }

  private triggerUpdateOnInjectedSampledata(): void {
    if (this.loadedTemplateJson != null) {
      this.templateObject = this.loadedTemplateJson;
    }
    if (this.loadedMetadata !== null) {
      setTimeout(() => {
        if (this.loadedMetadata !== null) {
          this.instanceObject = this.loadedMetadata;
        }
      });
    }
  }
}
