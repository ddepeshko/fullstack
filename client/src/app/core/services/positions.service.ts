import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { api } from '@constants/api';
import { Observable } from 'rxjs';
import { IPositions } from '@models/positions';
import { IMessage } from '@models/message';

@Injectable()
export class PositionsService {
  constructor(private http: HttpClient) {}

  public getAllPositions(categoryId: string): Observable<IPositions[]> {
    return this.http.get<IPositions[]>(`${api.baseUrl}${api.positions.positionsById}`.replace('{id}', categoryId));
  }

  public createPosition(position: IPositions): Observable<IPositions[]> {
    return this.http.post<IPositions[]>(`${api.baseUrl}${api.positions.positionsRoute}`, position);
  }

  public deletePosition(id: string): Observable<IMessage> {
    return this.http.delete<IMessage>(`${api.baseUrl}${api.positions.positionsById}`.replace('{id}', id));
  }
}
