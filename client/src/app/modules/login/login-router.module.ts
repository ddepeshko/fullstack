import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { Route, RouterModule } from '@angular/router';
import * as path from 'path';

const routes: Route[] = [
  {
    path: '',
    component: LoginPageComponent,
  },
];

@NgModule({
  declarations: [LoginPageComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class LoginRouterModule {}
