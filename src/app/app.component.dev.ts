import { Component, OnInit } from '@angular/core';
import { SAMPLE_INSTANCE } from './sample-instance';
import { SAMPLE_TEMPLATE } from './sample-template';

@Component({
  selector: 'app-component-dev',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponentDev implements OnInit {

  injectedTemplate = SAMPLE_TEMPLATE;

  //emptyInstance = EmptyTemplateService.initInstance(this.injectedTemplate);
  emptyInstance = SAMPLE_INSTANCE;


  constructor() {
  }

  ngOnInit(): void {
  }

}
