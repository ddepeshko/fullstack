import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICategory } from '../../common/models/category';
import { api } from '../../common/constants/api';

@Injectable()
export class CategoriesService {
  constructor(private http: HttpClient) {}

  public getAllCategories(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>(`${api.baseUrl}${api.category.categoryRoute}`);
  }

  public createCategory(category: ICategory): Observable<ICategory> {
    return this.http.post<ICategory>(`${api.baseUrl}${api.category.categoryRoute}`, category);
  }
}
