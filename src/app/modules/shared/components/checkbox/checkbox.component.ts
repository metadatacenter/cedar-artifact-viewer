import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TreeNode } from '../../models/tree-node.model';


@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']

})
export class CheckboxComponent implements OnInit {
  @Input() formGroup: FormGroup;
  @Input() control: FormControl;
  @Input() node: TreeNode;
  @Input() mode: string;
  @Input() index: number;
  @Output() changed = new EventEmitter<any>();

  ngOnInit() {
    // initialize the value
    this.formGroup.get('values').setValue(this.getValue(this.node.options, this.node.model[this.node.key], this.node.valueLocation));

    // watch for changes
    this.formGroup.get('values').valueChanges.subscribe(value => {
      // update our metadata model
      this.node.model[this.node.key] = this.setValue(value, this.node.options, this.node.model[this.node.key], this.node.valueLocation);


      // fire off change message to parent
      this.changed.emit({
        'type': this.node.type,
        'subtype': this.node.subtype,
        'model': this.node.model,
        'key': this.node.key,
        'index': 0,
        'location': this.node.valueLocation,
        'value': value
      });
    });
  }

  console(message) {
    console.log(message);
  }

  setChecked(event, control) {
    control.setValue(event.checked);
  }

  getLiteralMap(literals) {
    const map = literals
      .map(function (element) {
        return element.label;
      });
    return map;
  }

  // get the value out of the model and into something the form can edit
  getValue(literals, model, valueLocation) {
    const result = [];
    const map = this.getLiteralMap(literals);
    map.forEach(function () {
      result.push(false);
    });

    if (model) {
      for (let i = 0; i < model.length; i++) {
        result[map.indexOf(model[i][valueLocation])] = true;
      }
    }
    return result;
  }

  // get the form value into the model
  setValue(value, literals, model, valueLocation) {
    const result = [];
    const map = this.getLiteralMap(literals);

    for (let i = 0; i < value.length; i++) {
      const obj = {};
      obj[valueLocation] = map[value[i]];
      result.push(obj);
    }

    return result;
  }
}
