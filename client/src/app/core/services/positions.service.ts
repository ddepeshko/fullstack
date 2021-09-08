import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { api } from '@constants/api';
import { Observable } from 'rxjs';
import { IPositions } from '@models/positions';

@Injectable()
export class PositionsService {
  constructor(private http: HttpClient) {}

  getAllPositions(categoryId: string): Observable<IPositions[]> {
    return this.http.get<IPositions[]>(`${api.positions.positionsById}`.replace('{id}', categoryId));
  }
}
