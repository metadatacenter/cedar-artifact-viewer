import { Component, OnInit } from '@angular/core';
import { SAMPLE_TEMPLATE } from './sample-template';
import { EmptyTemplateService } from './modules/shared/services/empty-template.service';
import { SAMPLE_INSTANCE } from './sample-instance';

@Component({
  selector: 'app-component-dev',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponentDev implements OnInit {
  injectedTemplate = SAMPLE_TEMPLATE;

  //injectedInstance = EmptyTemplateService.initInstance(this.injectedTemplate);

  injectedInstance = SAMPLE_INSTANCE;

  artifactViewerConfig = {
    sampleTemplateLocationPrefix:
      'http://localhost:4240/cedar-embeddable-editor-sample-templates/',
    loadSampleTemplateName: '01',
    showSampleTemplateLinks: true,
    expandedSampleTemplateLinks: true,
    showHeader: true,
    showFooter: true,

    terminologyIntegratedSearchUrl:
      'https://terminology.metadatacenter.orgx/bioportal/integrated-search',

    defaultLanguage: 'en',
    fallbackLanguage: 'en',
  };

  constructor() {}

  ngOnInit(): void {}
}
