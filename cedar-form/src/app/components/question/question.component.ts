import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChange,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

import {InputTypeService} from '../../services/input-type.service';
import {InputType} from '../../models/input-type';
import {TreeNode} from '../../models/tree-node.model';
import {TemplateParserService} from '../../services/template-parser.service';
import {InstanceService} from '../../services/instance.service';
import {ValidatorService} from '../../services/validator.service';
import {faAsterisk} from '@fortawesome/free-solid-svg-icons';
import {MatTooltip} from '@angular/material';


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.less'],
  providers: [],
  encapsulation: ViewEncapsulation.None
})
export class QuestionComponent implements OnInit, OnChanges, AfterViewInit {
  @ViewChild('tooltip', {static: false}) tooltip: MatTooltip;
  @Input() node: TreeNode;
  @Input() parentGroup: FormGroup;
  @Input() autocompleteResults: any;
  @Input() disabled: boolean;
  @Output() changed = new EventEmitter<any>();
  @Output() autocomplete = new EventEmitter<any>();

  faAsterisk = faAsterisk;
  database: TemplateParserService;
  formGroup: FormGroup;
  showDelay = {value: 0};
  hideDelay = {value: 0};
  offScreen = 'position:absolute;top:-1000px;left:-1000px';

  constructor(private elementRef: ElementRef, private ref: ChangeDetectorRef, private fb: FormBuilder, db: TemplateParserService) {
    this.database = db;
  }


  onAutocomplete(event) {
    this.autocomplete.emit(event);
  }

  onChange(event) {
    this.changed.emit({
      'type': event.type,
      'subtype': event.subtype,
      'model': event.model,
      'key': event.key,
      'index': event.index,
      'location': event.valueLocation,
      'value': event.value
    });
  }

  mouseover() {
    // setTimeout(() => {
    //   // reposition tooltips
    //   const btn = this.elementRef.nativeElement.querySelector('button.mat-icon-button.help');
    //   const panels = document.querySelectorAll('.cdk-overlay-pane.mat-tooltip-panel');
    //   if (panels) {
    //     const rect = btn.getBoundingClientRect();
    //     const value = 'position:absolute;top:' + (rect.top - 25) + 'px;left:' + (rect.right + 5) + 'px';
    //     panels.forEach((panel) => {
    //       panel.setAttribute('style', value);
    //       // const tip = panel.querySelector('.mat-tooltip');
    //       // if (tip) {
    //       //   tip.setAttribute('style', 'max-width:25em;width:100%;background:red');
    //       // }
    //     });
    //   }
    //   this.ref.detectChanges();
    // });
  }

  mouseout() {
    // // setTimeout(() => {
    //   // reposition tooltips
    //   const panels = document.querySelectorAll('.cdk-overlay-pane.mat-tooltip-panel');
    //   if (panels) {
    //     panels.forEach((panel) => {
    //       panel.setAttribute('style', 'position:absolute;top:-1000px;left:-1000px');
    //     });
    //   }
    // setTimeout(() => {
    //   this.ref.detectChanges();
    // });
  }

  ngAfterViewInit() {
    console.log('tooltip', this.tooltip);
  }

  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    if (changes['autocompleteResults']) {
      this.autocompleteResults = changes['autocompleteResults']['currentValue'];
    }
  }

  ngOnInit() {
    this.autocompleteResults = [];
    // build the array of controls and add it to the parent
    const validators = ValidatorService.getValidators(this.node);
    let name;
    let obj;

    switch (this.node.type) {

      case InputType.static:
      case InputType.youTube:
      case InputType.image:
      case InputType.sectionBreak:
      case InputType.pageBreak:
      case InputType.richText:
        this.formGroup = this.fb.group({values: this.fb.array([])});
        this.parentGroup.setControl(this.node.key, this.formGroup);
        break;

      case InputType.controlled:
        this.formGroup = this.fb.group({values: this.fb.array(this.buildControlled(this.node, this.disabled))});
        this.parentGroup.setControl(this.node.key, this.formGroup);
        this.setDisable(this.formGroup, this.disabled);
        break;

      case InputType.date:
        this.formGroup = this.fb.group({values: this.fb.array(this.allowMultipleControls(this.node, this.disabled, validators))});
        // this.formGroup.updateValueAndValidity({onlySelf: true, emitEvent: true});
        this.parentGroup.setControl(this.node.key, this.formGroup);
        this.setDisable(this.formGroup, this.disabled);
        break;

      case InputType.textfield:
      case InputType.textarea:
        this.formGroup = this.fb.group({values: this.fb.array(this.allowMultipleControls(this.node, this.disabled, validators))});
        this.parentGroup.setControl(this.node.key, this.formGroup);
        this.setDisable(this.formGroup, this.disabled);
        break;

      case InputType.radio:
        name = this.node.key + 'radio';
        obj = {};
        obj[name] = new FormControl(this.fb.array([]));
        this.formGroup = this.fb.group(obj);
        this.parentGroup.setControl(this.node.key, this.formGroup);
        this.setDisable(this.formGroup, this.disabled);
        break;

      case InputType.checkbox:
        this.formGroup = this.fb.group({values: this.fb.array(this.allowMultipleOptions(this.node, this.disabled))});
        this.parentGroup.setControl(this.node.key, this.formGroup);
        this.setDisable(this.formGroup, this.disabled);
        break;

      case InputType.list:
        name = this.node.key + 'list';
        obj = {};
        obj[name] = new FormControl(this.fb.array([]));
        this.formGroup = this.fb.group(obj);
        this.parentGroup.setControl(this.node.key, this.formGroup);
        this.setDisable(this.formGroup, this.disabled);
        break;

      case InputType.attributeValue:
        this.formGroup = this.fb.group({values: this.fb.array(this.buildAV(this.node, this.disabled))});
        this.parentGroup.setControl(this.node.key, this.formGroup);
        this.setDisable(this.formGroup, this.disabled);
        break;
    }
  }

  setDisable(formGroup: FormGroup, disabled) {
    if (disabled) {
      formGroup.disable();
    }
  }

  // controlled term was selected
  onSelectedControlled(event) {
    InstanceService.addControlledValue(this.node.model, this.node.key, event['@id'], event['prefLabel']);
  }

  // controlled term was removed
  onRemovedControlled(index) {
    InstanceService.removeControlledValue(this.node.model, this.node.key, index);
  }

  allowsMultiple(type: InputType) {
    return type !== InputType.element && InputTypeService.allowsMultiple(type);
  }


  get isValid() {
    let result = false;
    if (this.parentGroup && this.parentGroup.controls.hasOwnProperty(this.node.key)) {
      result = this.parentGroup.controls[this.node.key].valid;
    }
    return result;
  }

  isChecked(node, label) {
    let result = false;
    node.model[node.key].forEach((value, i) => {
      if (value[node.valueLocation] === label) {
        result = true;
      }
    });
    return result;
  }

  copyItem(node: TreeNode, index: number) {
    const validators = ValidatorService.getValidators(this.node);
    let clonedModel;

    switch (this.node.type) {
      case InputType.controlled:
        clonedModel = Object.assign({}, node.model[node.key][index]);
        this.node.model[node.key].splice(index, 0, node.model[node.key][index]);
        this.formGroup.setControl('values', this.fb.array(this.buildControlled(node, this.disabled)));
        break;

      case InputType.textfield:
      case InputType.textarea:
      case InputType.date:

        if (node.model) {
          if (Array.isArray(node.model[node.key])) {
            clonedModel = Object.assign({}, node.model[node.key][index]);
            this.node.model[node.key].splice(index, 0, clonedModel);
          } else {
            clonedModel = Object.assign({}, node.model[node.key]);
            this.node.model[node.key] = [clonedModel, clonedModel];
          }
        } else {
          this.node.model[node.key] = [null, null];
        }
        this.formGroup.setControl('values', this.fb.array(this.allowMultipleControls(node, this.disabled, validators)));
        // this.formGroup.updateValueAndValidity({onlySelf: true, emitEvent: true});
        break;
    }
  }

  removeItem(node: TreeNode, index: number) {
    const validators = ValidatorService.getValidators(this.node);
    switch (node.type) {

      case InputType.controlled:
        node.model[node.key].splice(index, 1);
        this.formGroup.setControl('values', this.fb.array(this.buildControlled(node, this.disabled)));
        break;

      case InputType.textfield:
      case InputType.textarea:
      case InputType.date:
        node.model[this.node.key].splice(index, 1);
        // this.formGroup.updateValueAndValidity({onlySelf: false, emitEvent: true});
        this.formGroup.setControl('values', this.fb.array(this.allowMultipleControls(node, this.disabled, validators)));
        break;
    }
  }

  loadForm(key, form) {
  }


  private allowMultipleOptions(node, disabled: boolean): any[] {
    const arr = node.options.map(opt => {
      return this.fb.control({value: false, disabled: disabled});
    });
    return arr;
  }

  getLength(model) {
    return Array.isArray(model) ? model.length : 1;
  }

  private allowMultipleControls(node, disabled: boolean, validators): any[] {
    const arr = [];
    if (node.model && node.model[node.key]) {
      for (let i = 0; i < this.getLength(node.model[node.key]); i++) {
        arr.push(new FormControl({value: null, disabled: disabled, validators: validators}));
      }
    } else {
      arr.push(new FormControl({value: null, disabled: disabled, validators: validators}));
    }
    return arr;
  }

  private buildControlled(node: TreeNode, disabled: boolean): any[] {
    const arr = [];
    const chips = [];
    const ids = [];
    if (node.model[node.key]) {
      if (Array.isArray(node.model[node.key])) {

        node.model[node.key].forEach((value) => {
          chips.push(value['rdfs:label']);
          ids.push(value['@id']);
        });

        const group = this.fb.group({
          chips: this.fb.array(chips),
          ids: this.fb.array(ids),
          search: new FormControl({disabled: disabled})
        });
        arr.push(group);

      } else {

        if (node.model[node.key].hasOwnProperty('rdfs:label')) {
          chips.push(node.model[node.key]['rdfs:label']);
          ids.push(node.model[node.key]['@id']);
        }

        const group = this.fb.group({
          chips: this.fb.array(chips),
          ids: this.fb.array(ids),
          search: new FormControl({disabled: disabled})
        });

        arr.push(group);
      }
    } else {
      const group = this.fb.group({
        chips: this.fb.array(chips),
        ids: this.fb.array(ids),
        search: new FormControl({disabled: disabled})
      });
      arr.push(group);
    }

    return arr;
  }

  private buildControlledSingle(node: TreeNode, disabled: boolean): any[] {
    const arr = [];
    if (Array.isArray(node.model[node.key])) {
      node.model[node.key].forEach((value) => {
        const group = this.fb.group({
          chips: this.fb.array([value['rdfs:label']]),
          ids: this.fb.array([value['@id']]),
          search: new FormControl({disabled: disabled})
        });
        arr.push(group);
      });
    } else {
      const group = this.fb.group({
        chips: this.fb.array([node.model[node.key]['rdfs:label']]),
        ids: this.fb.array([node.model[node.key]['@id']]),
        search: new FormControl({disabled: disabled})
      });
      arr.push(group);
    }

    return arr;
  }

  // build the attribute value form controls
  private buildAV(node: TreeNode, disabled: boolean): any[] {
    const arr = [];
    if (node.model[node.key] && node.model[node.key].length) {
      node.model[node.key].forEach((value) => {
        const items = [];
        items.push(new FormControl({value: '', disabled: disabled}));
        items.push(new FormControl({value: '', disabled: disabled}));
        const group = this.fb.group({values: this.fb.array(items)});
        arr.push(group);
      });
    } else {
      const items = [];
      items.push(new FormControl({value: '', disabled: disabled}));
      items.push(new FormControl({value: '', disabled: disabled}));
      const group = this.fb.group({values: this.fb.array(items)});
      arr.push(group);
    }
    return arr;
  }


}

