import { Component, OnInit } from '@angular/core';
import { RoutesLinks } from '@constants/routes';
import { CategoriesService } from '@services/categories.service';
import { ICategory } from '@models/category';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-categories-page',
  templateUrl: './categories-page.component.html',
  styleUrls: ['./categories-page.component.scss'],
})
export class CategoriesPageComponent implements OnInit {
  public addCategoryLink: string = RoutesLinks.NewCategory;
  public categories$: Observable<ICategory[]>;

  constructor(private categoriesService: CategoriesService) {}

  ngOnInit(): void {
    this.categories$ = this.getAllCategories();
  }

  getAllCategories(): Observable<ICategory[]> {
    return this.categoriesService.getAllCategories();
  }
}
