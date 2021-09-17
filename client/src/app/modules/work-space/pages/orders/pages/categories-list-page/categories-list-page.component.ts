import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '@services/categories.service';
import { Observable } from 'rxjs';
import { ICategory } from '@models/category';
import { RoutesLinks } from '@constants/routes';

@Component({
  selector: 'app-categories-list-page',
  templateUrl: './categories-list-page.component.html',
  styleUrls: ['./categories-list-page.component.scss'],
})
export class CategoriesListPageComponent implements OnInit {
  public categoriesList$: Observable<ICategory[]>;
  public orderCategoryLink: string = `/${RoutesLinks.Orders}`;

  constructor(private categoriesService: CategoriesService) {}

  ngOnInit(): void {
    this.obtainCategories();
  }

  private obtainCategories(): void {
    this.categoriesList$ = this.categoriesService.getAllCategories();
  }
}
