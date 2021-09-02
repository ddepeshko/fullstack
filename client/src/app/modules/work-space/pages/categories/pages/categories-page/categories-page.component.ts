import { Component, OnInit } from '@angular/core';
import { RoutesLinks } from '../../../../../../common/constants/routes';
import { CategoriesService } from '../../../../../../core/services/categories.service';
import { ICategory } from '../../../../../../common/models/category';
import { throwError } from 'rxjs';
import { ILoadable } from '../../../../../../common/models/loadable';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-categories-page',
  templateUrl: './categories-page.component.html',
  styleUrls: ['./categories-page.component.scss'],
})
export class CategoriesPageComponent implements OnInit, ILoadable {
  public addCategoryLink: string = RoutesLinks.NewCategory;
  public categoryLink: string = RoutesLinks.Categories;
  public isLoading: boolean = false;
  public categoriesList: ICategory[] = [];

  constructor(private categoriesService: CategoriesService) {}

  ngOnInit(): void {
    this.getAllCategories();
  }

  getAllCategories(): void {
    this.isLoading = true;
    this.categoriesService
      .getAllCategories()
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe(
        (response: ICategory[]) => {
          this.categoriesList = response;
        },
        (error) => {
          throwError(error);
        }
      );
  }

  public createCategory() {
    const category: ICategory = {
      name: 'test',
    };

    this.categoriesService.createCategory(category).subscribe();
  }
}
