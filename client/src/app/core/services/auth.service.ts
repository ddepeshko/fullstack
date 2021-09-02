import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Token, IUser } from '../../common/models/user';
import { Observable } from 'rxjs';
import { api } from '../../common/constants/api';
import { tap } from 'rxjs/operators';
import { LocalStorageKeys } from '../../common/constants/localStorage-keys';
import { Router } from '@angular/router';
import { RoutesLinks } from '../../common/constants/routes';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private token: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  public login(user: IUser): Observable<Token> {
    return this.http.post<Token>(`${api.baseUrl}${api.auth.authRoute}${api.auth.login}`, user).pipe(
      tap(({ token }: Token) => {
        localStorage.setItem(LocalStorageKeys.token, token);
        this.setToken();
      })
    );
  }

  public register(user: IUser): Observable<IUser> {
    return this.http.post<IUser>(`${api.baseUrl}${api.auth.authRoute}${api.auth.register}`, user);
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
    this.router.navigate([`/${RoutesLinks.Auth}/${RoutesLinks.Login}`]);
  }
}
