import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MaterialServices } from '@classes/material-services';
import { RoutesLinks } from '@constants/routes';

@Component({
  selector: ' app-floating-button',
  templateUrl: './floating-button.component.html',
  styleUrls: ['./floating-button.component.scss'],
})
export class FloatingButtonComponent implements OnInit, AfterViewInit {
  @ViewChild('floating') floatingRef: ElementRef | undefined;
  public routes = RoutesLinks;
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    MaterialServices.initializeFloatingButton(this.floatingRef);
  }
}
