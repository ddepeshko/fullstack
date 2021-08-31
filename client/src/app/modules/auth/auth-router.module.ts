import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { LoginComponent } from '@modules/auth/components/login/login.component';
import { AuthPageComponent } from '@modules/auth/pages/auth-page/auth-page.component';
import { RegisterComponent } from '@modules/auth/components/register/register.component';
import { RoutesLinks } from '../../common/constants/routes';

const routes: Route[] = [
  {
    path: '',
    component: AuthPageComponent,

    children: [
      {
        path: RoutesLinks.Login,
        component: LoginComponent,
      },
      {
        path: RoutesLinks.Register,
        component: RegisterComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class AuthRouterModule {}
