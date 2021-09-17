import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-orders-page',
  templateUrl: 'orders-page.component.html',
})
export class OrdersPageComponent implements OnInit {
  public currentPageTitle: string;
  public isRoot: boolean;
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe(() => {
      this.setCurrentPageTitle();
      this.checkIsRoot();
    });
  }

  public setCurrentPageTitle(): void {
    this.currentPageTitle = this.route.snapshot.firstChild?.data.currentPageTitle;
  }
  public checkIsRoot(): void {
    this.isRoot = this.route.snapshot.firstChild?.data.isRoot;
  }
}
