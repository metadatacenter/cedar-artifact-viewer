import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-source-panels',
  templateUrl: './source-panels.component.html',
  styleUrls: ['./source-panels.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SourcePanelsComponent implements OnInit {
  @Input() showTemplateData: boolean;
  @Input() showInstanceData: boolean;

  @Input() expandedInstanceData = false;
  @Input() expandedTemplateData = false;

  @Input() templateData: any = null;
  @Input() instanceData: any = null;

  constructor() {}

  ngOnInit(): void {}

  stopPropagation(event): void {
    event.stopPropagation();
  }
}
