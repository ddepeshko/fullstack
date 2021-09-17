import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
})
export class BreadcrumbsComponent implements OnInit, OnChanges {
  @Input() pageTitle: string;
  @Input() currentPageTitle: string;
  @Input() isRoot: boolean;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes) {
      this.currentPageTitle = changes.currentPageTitle?.currentValue;
      this.isRoot = changes.isRoot?.currentValue;
    }
  }
}
