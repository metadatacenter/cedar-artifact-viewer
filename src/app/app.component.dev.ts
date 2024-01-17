import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-dev',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponentDev implements OnInit {
  artifactViewerConfig = {
    sampleTemplateLocationPrefix: 'http://localhost:4240/cedar-embeddable-editor-sample-templates/',
    loadSampleTemplateName: '20',
    showSampleTemplateLinks: true,
    expandedSampleTemplateLinks: false,

    showTemplateData: true,
    showInstanceData: true,
    showHeader: true,
    showFooter: true,

    terminologyIntegratedSearchUrl: 'https://terminology.metadatacenter.orgx/bioportal/integrated-search',

    defaultLanguage: 'en',
    fallbackLanguage: 'en',
  };

  constructor() {}

  ngOnInit(): void {}
}
