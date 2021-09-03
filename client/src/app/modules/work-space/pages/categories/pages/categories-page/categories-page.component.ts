import { Component, OnInit } from '@angular/core';
import { RoutesLinks } from '../../../../../../common/constants/routes';
import { CategoriesService } from '../../../../../../core/services/categories.service';
import { ICategory } from '../../../../../../common/models/category';
import { Observable } from 'rxjs';
import { ILoadable } from '../../../../../../common/models/loadable';

@Component({
  selector: 'app-categories-page',
  templateUrl: './categories-page.component.html',
  styleUrls: ['./categories-page.component.scss'],
})
export class CategoriesPageComponent implements OnInit {
  public addCategoryLink: string = RoutesLinks.NewCategory;
  public categoryLink: string = RoutesLinks.Categories;
  public categories$: Observable<ICategory[]>;

  constructor(private categoriesService: CategoriesService) {}

  ngOnInit(): void {
    this.categories$ = this.getAllCategories();
  }

  getAllCategories(): Observable<ICategory[]> {
    return this.categoriesService.getAllCategories();
  }

  public createCategory() {
    const category: ICategory = {
      name: 'test',
    };

    this.categoriesService.createCategory(category).subscribe();
  }
}
