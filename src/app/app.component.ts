import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BreadcrumbService } from './services/breadcrumb.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isCollapsed = false;
  breadcrumbs: Array<{ label: string, url: string }> = [];

  constructor(
    private translate: TranslateService,
    private breadcrumbService: BreadcrumbService
  ) {
    this.translate.setDefaultLang('en');

    this.breadcrumbService.breadcrumbs$.subscribe((breadcrumbs: any) => {
      this.breadcrumbs = breadcrumbs
      console.log(breadcrumbs)
    });
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }
}
