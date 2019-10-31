import { Component } from '@angular/core';
import { AutenticacaoService } from './autenticacao.service';
import { Event, Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'amika-frontend';

  showLoadingIndicator = true;
  constructor(private router: Router) {
    this.router.events.subscribe((routerEvent: Event) => {
      if (routerEvent instanceof NavigationStart) {
        this.showLoadingIndicator = true;
      }
      if (routerEvent instanceof NavigationEnd ||
          NavigationCancel || NavigationError) {
        this.showLoadingIndicator = false;
      }
    })
  }
}
