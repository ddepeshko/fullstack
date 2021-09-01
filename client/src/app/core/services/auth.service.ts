import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Token, User } from '../../common/models/user';
import { Observable } from 'rxjs';
import { api } from '../../common/constants/api';
import { tap } from 'rxjs/operators';
import { LocalStorageKeys } from '../../common/constants/localStorage-keys';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private token: string = '';

  constructor(private http: HttpClient) {}

  public login(user: User): Observable<Token> {
    return this.http.post<Token>(`${api.baseUrl}${api.auth.authRoute}${api.auth.login}`, user).pipe(
      tap(({ token }: Token) => {
        localStorage.setItem(LocalStorageKeys.token, token);
        this.setToken();
      })
    );
  }

  public register(user: User): Observable<User> {
    return this.http.post<User>(`${api.baseUrl}${api.auth.authRoute}${api.auth.register}`, user);
  }

  public setToken() {
    const predictedToken = localStorage.getItem(LocalStorageKeys.token);
    this.token = predictedToken ? predictedToken : '';
  }

  public getToken(): string {
    return this.token;
  }

  public isAuthenticated(): boolean {
    return !!this.token;
  }

  public logout(): void {
    localStorage.clear();
    this.setToken();
  }
}
