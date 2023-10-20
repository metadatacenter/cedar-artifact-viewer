import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TreeNode } from '../../models/tree-node.model';

@Component({
  selector: 'app-richtext',
  templateUrl: './richtext.component.html',
  styleUrls: ['./richtext.component.scss'],
})
export class RichtextComponent implements OnInit {
  @Input() formGroup: FormGroup;
  @Input() node: TreeNode;

  constructor() {}

  ngOnInit() {}
}
