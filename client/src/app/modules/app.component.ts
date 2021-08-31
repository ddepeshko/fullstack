import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/services/auth.service';
import { LocalStorageKeys } from '../common/constants/localStorage-keys';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.updateStoredToken();
  }

  updateStoredToken(): void {
    const predictedToken = localStorage.getItem(LocalStorageKeys.token);
    if (predictedToken) {
      this.authService.setToken(predictedToken);
    }
  }
}
