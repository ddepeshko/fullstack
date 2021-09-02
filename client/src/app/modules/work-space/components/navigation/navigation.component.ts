import { Component, OnInit } from '@angular/core';
import { LINKS } from '../../../../common/constants/routes';
import { INavigationLink } from '../../../../common/models/navigation-link';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  public linksList: INavigationLink[] = LINKS;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  public logout(event: Event): void {
    event.stopPropagation();
    this.authService.logout();
  }
}
