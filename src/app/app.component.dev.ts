import { Component, OnInit } from '@angular/core';
import { SAMPLE_TEMPLATE } from './sample-template';
import { EmptyTemplateService } from "./modules/shared/services/empty-template.service";
import { SAMPLE_INSTANCE } from "./sample-instance";

@Component({
  selector: 'app-component-dev',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponentDev implements OnInit {

  injectedTemplate = SAMPLE_TEMPLATE;

  //injectedInstance = EmptyTemplateService.initInstance(this.injectedTemplate);

   injectedInstance = SAMPLE_INSTANCE;


  constructor() {
  }

  ngOnInit(): void {
  }

}
