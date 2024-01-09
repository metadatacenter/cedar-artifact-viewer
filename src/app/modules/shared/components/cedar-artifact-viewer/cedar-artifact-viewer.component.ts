import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChange,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { PageEvent } from '@angular/material/paginator';
import { NestedTreeControl } from '@angular/cdk/tree';

import * as cloneDeep from 'lodash/cloneDeep';
import { TemplateParserService } from '../../services/template-parser.service';
import { TemplateService } from '../../services/template.service';
import { TreeNode } from '../../models/tree-node.model';
import { InstanceService } from '../../services/instance.service';

@Component({
  selector: 'app-cedar-artifact-viewer',
  templateUrl: './cedar-artifact-viewer.component.html',
  styleUrls: ['./cedar-artifact-viewer.component.scss'],
  providers: [TemplateParserService],
  encapsulation: ViewEncapsulation.None,
})
export class CedarArtifactViewerComponent implements OnInit, OnChanges {
  private static INNER_VERSION = '2023-10-20 17:00';

  static TEMPLATE_LOCATION_PREFIX = 'sampleTemplateLocationPrefix';
  static LOAD_SAMPLE_TEMPLATE_NAME = 'loadSampleTemplateName';
  static FALLBACK_LANGUAGE = 'fallbackLanguage';
  static DEFAULT_LANGUAGE = 'defaultLanguage';
  static SHOW_SPINNER_BEFORE_INIT = 'showSpinnerBeforeInit';

  private static SHOW_TEMPLATE_DATA = 'showTemplateData';
  private static SHOW_INSTANCE_DATA = 'showInstanceData';
  private static SHOW_HEADER = 'showHeader';
  private static SHOW_FOOTER = 'showFooter';
  private static SHOW_SAMPLE_TEMPLATE_LINKS = 'showSampleTemplateLinks';
  private static EXPANDED_SAMPLE_TEMPLATE_LINKS = 'expandedSampleTemplateLinks';

  instance: any;
  template: any;

  @Input() mode: string;
  @Input() autocompleteResults: any;
  @Output() autocomplete = new EventEmitter<any>();
  @Output() formChange = new EventEmitter<any>();
  @ViewChild('help', { static: true }) help: ElementRef;

  form: FormGroup;
  title: string;
  description: string;
  dataSource: MatTreeNestedDataSource<TreeNode>;
  treeControl: NestedTreeControl<TreeNode>;
  database: TemplateParserService;
  pageEvent: PageEvent;
  pageTitle: string;
  pageDescription: string;

  @Input() sampleTemplateLoaderObject: any = null;
  showSampleTemplateLinks = false;
  showTemplateData: false;
  showInstanceData: false;
  showHeader = false;
  showFooter = false;
  expandedSampleTemplateLinks = false;

  constructor(database: TemplateParserService) {
    this.pageEvent = {
      previousPageIndex: 0,
      pageIndex: 0,
      pageSize: 1,
      length: 0,
    };
    this.database = database;
    this.dataSource = new MatTreeNestedDataSource();
    this.treeControl = new NestedTreeControl<TreeNode>(this._getChildren);
    this.form = new FormGroup({});
    console.log('CAV:' + CedarArtifactViewerComponent.INNER_VERSION);
  }

  @Input() set config(value: object) {
    if (value != null) {
      if (Object.hasOwn(value, CedarArtifactViewerComponent.SHOW_SAMPLE_TEMPLATE_LINKS)) {
        this.showSampleTemplateLinks = value[CedarArtifactViewerComponent.SHOW_SAMPLE_TEMPLATE_LINKS];
      }
      if (Object.hasOwn(value, CedarArtifactViewerComponent.SHOW_TEMPLATE_DATA)) {
        this.showTemplateData = value[CedarArtifactViewerComponent.SHOW_TEMPLATE_DATA];
      }
      if (Object.hasOwn(value, CedarArtifactViewerComponent.SHOW_INSTANCE_DATA)) {
        this.showInstanceData = value[CedarArtifactViewerComponent.SHOW_INSTANCE_DATA];
      }
      if (Object.hasOwn(value, CedarArtifactViewerComponent.SHOW_FOOTER)) {
        this.showFooter = value[CedarArtifactViewerComponent.SHOW_FOOTER];
      }
      if (Object.hasOwn(value, CedarArtifactViewerComponent.SHOW_HEADER)) {
        this.showHeader = value[CedarArtifactViewerComponent.SHOW_HEADER];
      }
      if (Object.hasOwn(value, CedarArtifactViewerComponent.EXPANDED_SAMPLE_TEMPLATE_LINKS)) {
        this.expandedSampleTemplateLinks = value[CedarArtifactViewerComponent.EXPANDED_SAMPLE_TEMPLATE_LINKS];
      }
    }
  }

  ngOnInit(): void {
    this.initialize();
  }

  onPageChange(event) {
    this.pageEvent = event;
    this.initialize();
    this.pageTitle = TemplateService.getTitleofPage(this.template, event.pageIndex);
    this.pageDescription = TemplateService.getDescriptionOfPage(this.template, event.pageIndex);
  }

  onAutocomplete(event) {
    this.autocomplete.emit(event);
  }

  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    if (changes['autocompleteResults'] && changes['autocompleteResults']['currentValue'].length > 0) {
      this.autocompleteResults = changes['autocompleteResults']['currentValue'];
    } else {
      this.initialize();
    }
  }

  private hasNestedChild = (_: number, nodeData: TreeNode) => !nodeData.type;

  private notHidden = (node: TreeNode) => !node.hidden;

  private _getChildren = (node: TreeNode) => node.children;

  // initialize tree database
  initialize() {
    if (this.instance && this.template) {
      this.pageEvent.length = TemplateService.getPageCount(this.template);

      this.title = InstanceService.getTitle(this.instance) || TemplateService.getTitle(this.template);
      this.description = InstanceService.getDescription(this.instance) || TemplateService.getDescription(this.template);
      this.database.initialize(this.form, this.instance, this.template, this.pageEvent.pageIndex);

      this.database.dataChange.subscribe((data) => {
        if (data && data.length > 0) {
          this.dataSource = new MatTreeNestedDataSource();
          this.dataSource.data = data;
          this.treeControl = new NestedTreeControl<TreeNode>(this._getChildren);
        }
      });

      this.emitChanges(this.form.value);
      this.onChanges();
    }
  }

  // is this view or edit mode
  isDisabled() {
    return this.mode === 'view';
  }

  // is this node hidden
  isHidden(node: TreeNode) {
    return node.hidden;
  }

  // add new element to form
  copyItem(node: TreeNode) {
    const clonedModel = cloneDeep(node.model[node.key][node.itemCount]);
    node.model[node.key].splice(node.itemCount + 1, 0, clonedModel);

    const clonedNode = cloneDeep(node);
    clonedNode.model = node.model;
    clonedNode.itemCount++;
    const siblings = node.parent ? node.parent.children : this.database.data;
    const index = siblings.indexOf(node);
    siblings.splice(index + 1, 0, clonedNode);

    // adjust remaining siblings itemCounts
    for (let i = index + 2; i < siblings.length; i++) {
      if (siblings[i].key === node.key) {
        siblings[i].itemCount++;
      }
    }
    this.updateModel(clonedNode, node.model);
    const parentGroup = node.parentGroup || this.form;
    parentGroup.addControl(clonedNode.key + clonedNode.itemCount, clonedNode.formGroup);
    this.database.dataChange.next(this.database.data);
  }

  // delete last element in node array
  removeItem(node: TreeNode) {
    const siblings = node.parent ? node.parent.children : this.database.data;
    const index = siblings.indexOf(node);
    siblings.splice(index, 1);

    // adjust remaining siblings itemCounts
    for (let i = index; i < siblings.length; i++) {
      if (siblings[i].key === node.key) {
        siblings[i].itemCount--;
      }
    }

    const parent = node.parentGroup || this.form;
    parent.removeControl(node.key + node.itemCount);
    this.database.dataChange.next(this.database.data);
  }

  // reset the model down the tree at itemCount
  updateModel(node: TreeNode, model) {
    node.model = model;

    if (node.children) {
      const that = this;
      const key = node.key;
      const itemCount = node.itemCount;

      if (Array.isArray(model[key])) {
        node.children.forEach(function (child) {
          that.updateModel(child, model[key][itemCount]);
        });
      } else {
        node.children.forEach(function (child) {
          that.updateModel(child, model[key]);
        });
      }
    }
  }

  // validate the entire form by touching each field
  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach((field) => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormArray) {
        control.controls.forEach((cntl) => {
          cntl.markAsTouched({ onlySelf: true });
        });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  emitChanges(val) {
    this.validateAllFormFields(this.form);
    this.formChange.emit({
      title: this.title,
      description: this.description,
      valid: this.form.valid,
      value: val,
    });
  }

  // notify caller of changes in the form
  onChanges(): void {
    if (this.form && this.form.valueChanges) {
      this.form.valueChanges.subscribe((val) => {
        this.emitChanges(val);
      });
    }
  }

  // correct the minutes and timezone
  parseDate(val) {
    let result;
    if (val) {
      // 'add' a timezone offset so we end up on the original date again
      const dt = new Date(val);
      dt.setMinutes(dt.getMinutes() + dt.getTimezoneOffset());
      result = dt;
    }
    return result;
  }

  // get the metadata for the template
  getTemplateInfo() {
    let result;
    if (this.template && Object.hasOwn(this.template, 'pav:lastUpdatedOn')) {
      result = this.parseDate(this.template['pav:lastUpdatedOn'].substring(0, 10)).toDateString();
    }
    return result;
  }

  dataAvailableForRender(): boolean {
    return this.template != null;
  }

  headerDataAvailableForRender(): boolean {
    return true;
  }

  @Input() set templateJsonObject(value: object) {
    this.template = value;
  }

  @Input() set instanceJsonObject(value: object) {
    this.instance = value;
  }
}
