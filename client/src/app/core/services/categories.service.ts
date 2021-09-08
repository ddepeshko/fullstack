import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICategory } from '@models/category';
import { api } from '@constants/api';
import { IMessage } from '@models/message';

@Injectable()
export class CategoriesService {
  constructor(private http: HttpClient) {}

  public getAllCategories(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>(`${api.baseUrl}${api.category.categoryRoute}`);
  }

  public createCategory(name: string, image: File): Observable<ICategory> {
    const formData = new FormData();
    if (image) {
      formData.append('image', image, image.name);
    }
    formData.append('name', name);
    return this.http.post<ICategory>(`${api.baseUrl}${api.category.categoryRoute}`, formData);
  }

  public updateCategory(id: number, name: string, image: File): Observable<ICategory> {
    const formData = new FormData();
    if (image) {
      formData.append('image', image, image.name);
    }
    formData.append('name', name);
    return this.http.patch<ICategory>(
      `${api.baseUrl}${api.category.categoryById}`.replace('{id}', String(id)),
      formData
    );
  }

  public getCategoryById(id: number): Observable<ICategory> {
    return this.http.get<ICategory>(`${api.baseUrl}${api.category.categoryById}`.replace('{id}', String(id)));
  }

  public deleteCategory(id: number): Observable<IMessage> {
    return this.http.delete<IMessage>(`${api.baseUrl}${api.category.categoryById}`.replace('{id}', String(id)));
  }
}
